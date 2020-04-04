import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"

import "./../styles/homepage.css"
import CardHeader from "./CardHeader"
import ContactCard from "./ContactCard"

const WelcomeCard = () => (
  <>
    <div className="welcomeWrapper">
      <div className="welcomeGradientWrapper">
        <div className="welcomeCard">
          <CardHeader />
          <ContactCard />

          <p>wielgos.me</p>

        </div>
      </div>
      <div className="welcomeUnderCard">
          {/* <p><a href="#projects">~ Check my projects ~</a></p> */}
        </div>
    </div>
  </>
)

export default WelcomeCard
