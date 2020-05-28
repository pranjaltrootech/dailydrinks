import React from "react";
import PropTypes from "prop-types";
import { Container } from "shards-react";


const Blank = ({ children }) => (
  <Container >
        {children}
  </Container>
);

Blank.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

Blank.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default Blank;
