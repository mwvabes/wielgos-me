import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"

import "./../styles/homepage.css"
import CardHeader from "./CardHeader"

const WelcomeCard = () => (
  <>
    <div className="welcomeWrapper">
      <div className="welcomeCard">
        <CardHeader />
        <h1>Hello!</h1>
      </div>
    </div>
  </>
)

export default WelcomeCard
