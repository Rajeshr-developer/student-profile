import styled, { createGlobalStyle } from "styled-components";

export const DashBoardHeader = styled.div`
  margin: 0 auto;
  width: 30%;
  float: left;
  border: 3px solid green;
  box-shadow: 3px 3px 4px #9f85852b;
  border: 3px solid #9e7e7e38;
`;

export const DashBoardLayout = styled.div`
  width: 100%;
  display: flex;
`;

export const ListViewHeader = styled.ul`
  flex-direction: column;
  margin: 0;
  padding: 10px;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const TableHead = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  align-self: flex-start;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 35%;
  margin-left: 30px;
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  outline: 0;
  user-select: none;
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 29%);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  > .material-icons {
    font-family: "Material Icons";
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "liga";
  }
`;

export const List = styled.li`
  margin: 10px 10px 10px 10px;
  border-radius: 0.3rem;
  background-color: transparent;
  border: 1px solid;
  color: #007bff;
  border-color: #007bff;
  font-size: 1.2em;
  font-weight: 600;
  height: 100%;
  line-height: 58px;
  width: 90%;
  list-style-type: none;
  cursor: pointer;
  :hover {
    background-color: #007bff;
    color: #fff;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const BackButton = styled.button`
  display: block;
  height: 40px;
  width: 120px;
  margin-left: 20px;
  align-self: flex-start;
  /*TYPE*/
  font-size: 24px;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
`;

export const DownloadButton = styled.button`
  display: block;
  height: 40px;
  width: 180px;
  margin-left: 20px;
  border-radius: 20px;
  /*TYPE*/
  color: #fff;
  font-size: 24px;
  font-family: "Nunito", sans-serif;
  text-decoration: none;
  text-align: center;
  background: rgb(30 74 108);
  cursor: pointer;
`;

export const SearchBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const SearchInput = styled.input`
  border: none;
  border-bottom: 3px solid #000;
  width: 50%;
  padding: 10px;
  margin-left: 30px;
  border-right: none;
  outline: none;
  font-size: 20px;
  color: black;
  background: none;
`;

export const SearchButton = styled.button`
  text-align: center;
  height: 51px;
  width: 40px;
  outline: none;
  cursor: pointer;
  border: 4px solid #111d5e;
  border-radius: 0 10px 10px 0;
  border-left: none;
  background: none;
  font-size: 20px;
  border-left: 4px solid #111d5e;
`;

export const FileUploadRoot = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  height: 100px;
`;

export const FileUploadTitle = styled.div`
  margin-left: 4%;
  align-self: flex-start;
  width: ${(props) => (props.width ? props.width : "13%")};
  margin-top: 4%;
  text-align: left;
  margin-bottom: 4%;
  border-bottom: 5px solid rgba(0, 0, 0, 0.45);
  border-radius: 5px;
`;

export const FileUploadHeader = styled.div`
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  width: 70%;
  height: 260px;
  background-color: #ffffff;
  padding: 10px 30px 40px;
`;

export const FileUploaderSubBox = styled.div`
  margin: 10px 0;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px dotted #a3a3a3;
  border-radius: 5px;

  p {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 12px;
    color: #a3a3a3;
  }
`;

export const ChooseFile = styled.button`
  text-decoration: none;
  background-color: #005af0;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  outline: none;
  transition: 0.3s;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
    font-family: Roboto, Helvetica, sans-serif;
  }
  body {
    min-height: 100%;
    // background: linear-gradient(90deg, #C7C5F4, #776BCC);
  }
`;

export const RootClass = styled.div``;
