import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"

import "./../styles/homepage.css"

const CardHeader = () => (
  <>
    <div className="cardHeader">
      <div className="cardHeaderMsg">
        <h1>Cześć!</h1>
      </div>
      <div className="cardMenu">
        <ul>
          <li>O mnje</li>
          <li>Projekty</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </div>
  </>
)

export default CardHeader
