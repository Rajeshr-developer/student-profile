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

export const SearchComponent = () => {
  const [studentProfile, setProfile] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const searchForProfile = (e) => {
    fetch(
      "http://localhost:3001/search?searchString=" +
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
    html2canvas(document.querySelector(".ProfileHeader")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 300);
      pdf.save("profile.pdf");
    });
  };

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
