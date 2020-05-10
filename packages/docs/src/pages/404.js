import React from 'react'

import SEO from '../components/seo'
import Header from '../components/header'

const NotFoundPage = () => (
  <div className="vn--body flex__dir--column bs-default">
    <Header siteTitle="404: Not found" />
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
