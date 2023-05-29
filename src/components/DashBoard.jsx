import React, { PureComponent } from "react";
import {
  ListViewHeader,
  DashBoardHeader,
  DashBoardLayout,
  List,
} from "../styles/DashBoardStyle";
import { SearchComponent } from "./SearchComponent";
import { Upload } from "./Upload";
import Logo from "./Logo";

const menu = ["Home", "Search", "Upload"];

function ListView({ changeCurrentState }) {
  return (
    <ListViewHeader>
      {menu.map((el) => (
        <List
          onClick={(e) => {
            changeCurrentState(el);
          }}
        >
          {el}
        </List>
      ))}
    </ListViewHeader>
  );
}

export default class DashBoard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentState: "search",
    };
  }

  changeCurrentState = (e) => {
    this.setState({ currentState: e.toLowerCase() });
  };

  returnComponent = () => {
    switch (this.state.currentState) {
      case "search":
        return <SearchComponent />;
      case "upload":
        return <Upload />;
      default:
        break;
    }
  };

  render() {
    return (
      <DashBoardLayout>
        <DashBoardHeader>
          <Logo marginTop={"10%"}></Logo>
          <ListView changeCurrentState={this.changeCurrentState} />
        </DashBoardHeader>
        {this.returnComponent()}
      </DashBoardLayout>
    );
  }
}
