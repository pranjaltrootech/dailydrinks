import React from "react";
import {
  Dropdown,
  NavItem,
} from "shards-react";

export default class UserActions extends React.Component {
  
  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
      </NavItem>
    );
  }
}
