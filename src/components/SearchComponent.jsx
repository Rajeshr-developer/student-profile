import React, { useState } from "react";
import {
  SearchBox,
  SearchBarContainer,
  SearchInput,
  FileUploadTitle,
  Footer,
  DownloadButton,
  BackButton,
} from "../styles/DashBoardStyle";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Profile from "./Profile";
import { StudentTable } from "./StudentTable";
import Config from "../config";

export const SearchComponent = () => {
  const [studentProfile, setProfile] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const searchForProfile = (e) => {
    fetch(
      `http://${Config.local.host}:${Config.local.port}/search?searchString=` +
        e.target.value.toLowerCase()
    )
      .then((response) => response.json())
      .then((result) => {
        setProfile(result);
      })
      .catch((error) => console.log("error", error));
  };

  const viewProfile = (evt) => {
    setSelectedProfile(evt);
  };

  const downloadAsPdf = () => {
    const fileName = selectedProfile.name.split(" ").join("-") || "profile";
    html2canvas(document.querySelector(".ProfileHeader")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save(`${fileName}.pdf`);
    });
  };
  console.log(selectedProfile);
  return (
    <>
      {
        <SearchBarContainer>
          <FileUploadTitle width={"19%"}>
            <h3>Search Profiles</h3>
          </FileUploadTitle>
          {!selectedProfile ? (
            <>
              <SearchBox>
                <SearchInput
                  onChange={(e) => {
                    searchForProfile(e);
                  }}
                  type="text"
                  class="search-input"
                  placeholder="Type your search query here..."
                ></SearchInput>
              </SearchBox>
              <StudentTable
                profile={studentProfile}
                viewProfile={viewProfile}
              />
            </>
          ) : (
            <>
              <BackButton onClick={() => setSelectedProfile(null)}>
                {"< Back"}
              </BackButton>
              <Profile profile={selectedProfile} />
              <DownloadButton onClick={() => downloadAsPdf()}>
                download
              </DownloadButton>
            </>
          )}
          <Footer />
        </SearchBarContainer>
      }
    </>
  );
};
