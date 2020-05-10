import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <nav className="navbar">
    <div className="navbar__title">
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </div>
    <div className="navbar__brand"></div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
