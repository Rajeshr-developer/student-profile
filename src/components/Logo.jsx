import React from "react";
import styled from "styled-components";

const LogoHeader = styled.img`
  height: 100px;
  width: 100px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  ${(props) => props.marginTop && "margin-top: 10%;"}
`;

function Logo(props) {
  return <LogoHeader src={require("../assets/logo.jpeg")} {...props} />;
}

export default Logo;
