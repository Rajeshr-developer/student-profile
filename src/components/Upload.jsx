import React, { useRef } from "react";
import * as XLSX from "xlsx";
import {
  ChooseFile,
  FileUploaderSubBox,
  FileUploadHeader,
  FileUploadTitle,
  FileUploadRoot,
  UploadInput,
} from "../styles/DashBoardStyle";

export const Upload = () => {
  const inputRef = useRef(null);

  const postCSV = (__data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(__data);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/uploadcsv", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  // Read picked file..!
  const filePicked = (evt) => {
    try {
      const excelFile = evt.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const bstr = event.target.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, {
          rawNumbers: false,
        });
        postCSV(data);
      };
      reader.readAsArrayBuffer(excelFile);
    } catch (error) {
      console.log("Error in reading file : ", error);
    }
  };

  return (
    <FileUploadRoot>
      <FileUploadTitle>
        <h3>Upload Files</h3>
      </FileUploadTitle>
      <FileUploadHeader>
        <FileUploaderSubBox>
          <header>
            <h4>Select File here</h4>
          </header>
          <p>Files Supported: Xlsx, xls</p>
          <UploadInput
            ref={inputRef}
            id="fileID"
            type="file"
            hidden=""
            accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={(e) => filePicked(e)}
          />
          <ChooseFile onClick={(e) => inputRef.current.click()}>
            {"Choose File"}
          </ChooseFile>
        </FileUploaderSubBox>
      </FileUploadHeader>
    </FileUploadRoot>
  );
};
