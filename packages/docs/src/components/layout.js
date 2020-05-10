import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Sidebar from './sidebar';
import PageTemplate from './page';

const Layout = ({ children, ...rest }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => {
        return (
          <div className="vn--body flex__dir--column bs-default">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="md">
              <div className="md--master bg-gray-6 border-radius">
                <Sidebar />
              </div>
              <div className="md--detail border-radius">
                <div className="container">
                  <PageTemplate pageContext={rest.pageContext}>
                    {children}
                  </PageTemplate>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
