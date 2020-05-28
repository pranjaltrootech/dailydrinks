import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";

import { Store } from "../../../flux";

class MainSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      sidebarNavItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      menuVisible: Store.getMenuState(),
      sidebarNavItems: Store.getSidebarItems()
    });
  }

  render() {
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      this.state.menuVisible && "open"
    );

    return (
      <Col
        tag="aside"
        className={classes}
        lg={{ size: 2 }}
        md={{ size: 3 }}
      >
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarSearch />
        {/* <div className="nav-wrapper">
          <Nav className="nav--no-borders flex-column">
            <NavItem>
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to="dashboard" class="nav-link" ><i class="material-icons">edit</i>Dashboard <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link to="user-profile" class="nav-link" ><i class="material-icons">person</i>User Profile</Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
          </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="dashboard" class="nav-link" ><i class="material-icons">edit</i>Dashboard <span class="sr-only">(current)</span></Link>
                    
                  </div>
                </li>
                
              </ul>
            </NavItem>
          </Nav>
          </div> */}
        <SidebarNavItems />
      </Col>
    );
  }
}

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

MainSidebar.defaultProps = {
  hideLogoText: false
};

export default MainSidebar;
