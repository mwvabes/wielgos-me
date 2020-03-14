import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"

import "./../styles/global.css"

const Footer = () => (
  <>
    <div className="footer">
      <div className="textAlignLeft">
        © 2018 - {new Date().getFullYear()} by wielgos.me
      </div>
      <div className="textAlignRight">
        <a href="">fb</a>
      </div>
    </div>
  </>
)

export default Footer
