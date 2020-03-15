import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WelcomeCard from "../components/welcomeCard"
import ProjectsSummary from "../components/ProjectsSummary"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeCard />
    <ProjectsSummary />
  </Layout>
)

export default IndexPage
