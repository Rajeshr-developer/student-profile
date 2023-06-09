import React from "react";
import styled from "styled-components";

const LogoHeader = styled.img`
  height: 100px;
  width: 100px;
  padding: 10px;
  ${(props) => props.marginTop && "margin-top: 10%;"}
  transition: transform 250ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

function Logo(props) {
  return <LogoHeader src={require("../assets/suguna_logo.jpeg")} {...props} />;
}

export default Logo;
