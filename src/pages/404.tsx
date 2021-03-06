import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage


// import React from "react"
// import Layout from "../components/layout"
// import Main from "../screen/main"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <Main />
//   </Layout>
// )

// export default IndexPage