import React, { PureComponent } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import Config from "../config";

const LoginHeader = styled.div`
  border-radius: 10px;
  background: #fff;
  position: absolute;
  margin: 0 auto;
  width: 350px;
  height: 400px;
  box-shadow: -10px 9px 10px;
`;

const LoginParent = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
`;

const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  justify-content: space-around;
`;

const UserNameInput = styled.input`
  box-shadow: -5px 5px 10px;
  border-radius: 10px;
  height: 10%;
`;

const SignInButton = styled.button`
  border-radius: 10px;
  background: #9e7575;
  width: 40%;
  color: white;
  height: 10%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const LoginTitleHead = styled.text``;

export default class LoginPage extends PureComponent {
  constructor(props) {
    super(props);
    this.changeState = props.changeState;
    this.state = {
      redirect: false,
      username: "",
      password: "",
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  // Send Login post data to server..!
  loginReq() {
    (async () => {
      const rawResponse = await fetch(
        `http://${Config.local.host}:${Config.local.port}/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: "admin", password: "admin" }),
        }
      );
      const content = await rawResponse.json();
      const { status = false } = content;
      if (status) {
        this.changeState("DASHBOARD");
      }
    })();
  }

  navigateToDashBoard() {
    this.setState({ redirect: true });
  }

  render() {
    return this.state.redirect ? (
      <Navigate to="/dashboard" />
    ) : (
      <LoginParent>
        <LoginHeader>
          <LoginTitle>
            <LoginTitleHead>
              <h2>SIGN IN</h2>
            </LoginTitleHead>
          </LoginTitle>
          <LoginBody>
            <span>Enter UserName</span>
            <UserNameInput
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
              type="text"
              text={this.state.username}
            />
            <span>Enter Password</span>
            <UserNameInput
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
              type="password"
              text={this.state.password}
            />
            <SignInButton
              onClick={(e) => {
                this.loginReq();
                // this.changeState("DASHBOARD");
              }}
            >
              <b>Sign-In</b>
            </SignInButton>
          </LoginBody>
        </LoginHeader>
      </LoginParent>
    );
  }
}
