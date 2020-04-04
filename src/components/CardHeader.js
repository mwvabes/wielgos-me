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
        <h1>Hello!</h1>
      </div>
      <div className="cardMenu">
        <ul>
          {/* <li><a href="#">About me</a></li>
          <li><a href="#">Projects</a></li>
          <li><span>Contact</span></li> */}
          <li><a href="kalkulator.wielgos.me">Kalkulator rekrutacyjny PRz</a></li>
        </ul>
      </div>
    </div>
  </>
)

export default CardHeader
