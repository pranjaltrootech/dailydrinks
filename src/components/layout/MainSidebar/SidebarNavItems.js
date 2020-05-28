import React from "react";
import { Nav, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";
const SidebarNavItems = (props) => {
  
  return (
    <div>
      <Nav vertical>
        <NavItem>
          <Link className="nav-link active" to="/order"><i className="material-icons">list_alt</i>Order</Link>
        </NavItem>
       
      </Nav>
    </div>
  );
}

export default SidebarNavItems;

