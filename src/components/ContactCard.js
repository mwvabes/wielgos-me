import React from "react"
import { Link } from "gatsby"

import "./../styles/homepage.css"

const ContactCard = () => (
  <>
    <div className="welcomeContactSection">
      <p>I am <span className="contactName">Marcin Wielgos</span></p>
      <p>&nbsp;<a href="http://github.com/mwvabes" target="_blank">visit my github</a></p>
      <p>&nbsp;contact me by e-mail: <span className="contactEmail">wielgos.me@gmail.com</span></p>
    </div>
  </>
)

export default ContactCard
