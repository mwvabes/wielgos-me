import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"

import "./../styles/global.css"

class Project extends React.Component {
  render() {
    return <>
      <div className="projectWrapper">
        <div className="projectContainer">
          <h3>{this.props.name}</h3>
        </div>
        
      </div>
    </>
  }
}

export default Project
