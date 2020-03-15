import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"

import "./../styles/global.css"
import Project from "./Project"

const ProjectsSummary = () => (
  <>
    <div className="projectsSummary container">
      <h2>Projekty</h2>
      <Project name="Abc" />
    </div>
  </>
)

export default ProjectsSummary
