import React, { useRef, useState } from "react";
import * as XLSX from "xlsx";
import {
  ChooseFile,
  FileUploaderSubBox,
  FileUploadHeader,
  FileUploadTitle,
  FileUploadRoot,
  UploadInput,
} from "../styles/DashBoardStyle";
import Config from "../config";
import data from "../globalData";

export const Upload = () => {
  const inputRef = useRef(null);
  const [defaultVal, setDefaultVal] = useState("B.com");
  const postCSV = (__data) => {
    const customData = __data.map((el) => {
      return { ...el, department: defaultVal };
    });
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(customData);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `http://${Config.local.host}:${Config.local.port}/uploadcsv`,
      requestOptions
    )
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
            <h4>Select Department here</h4>
          </header>
          <select
            onChange={(e) => {
              setDefaultVal(e.target.value);
            }}
          >
            {data.departments.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </select>
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
