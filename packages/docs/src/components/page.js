import React from 'react';
import SEO from './seo';

export default function PageTemplate({ children, pageContext }) {
  const { frontmatter } = pageContext;
  return (
    <>
      <SEO
        lang="eng"
        title={frontmatter.title}
        siteImage={frontmatter.siteImage}
        siteURL={frontmatter.path}
      />
      <div>{children}</div>
    </>
  );
}
