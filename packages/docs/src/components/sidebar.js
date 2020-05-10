import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const Sidebar = (props) => {
  function groupedPages() {
    return props.allMdx.edges.reduce((prev, next) => {
      const { group } = next.node.frontmatter;
      if (prev[group]) {
        prev[group].push(next.node.frontmatter);
        return prev;
      } else {
        return { ...prev, [group]: [next.node.frontmatter] };
      }
    }, {});
  }
  return (
    <>
      {Object.entries(groupedPages()).map(([key, entry], value) => {
        return (
          <section key={value}>
            <div className="text-m m-y-s color-gray-1">
              <span>{key}</span>
            </div>
            <ul className="list bg-white">
              {entry &&
                entry.map((page) => (
                  <li className="list__item" key={page.navigationLabel}>
                    <Link to={page.path}>{page.navigationLabel}</Link>
                  </li>
                ))}
            </ul>
          </section>
        );
      })}
    </>
  );
};

const SidebarQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                path
                navigationLabel
                group
              }
            }
          }
        }
      }
    `}
    render={(data) => <Sidebar {...data} />}
  />
);

export default SidebarQuery;
