import React from "react"
import { Link } from "gatsby"

import "./../styles/homepage.css"

const ContactCard = () => (
  <>
    <div className="welcomeContactSection">
      <p>I am <span className="contactName">Marcin Wielgos</span></p>
      <p>&nbsp;<a href="http://facebook.com/mwvabes" target="_blank">my facebook</a>, <a href="http://github.com/mwvabes" target="_blank">my github</a></p>
      <p>&nbsp;my e-mail: <span className="contactEmail">wielgos.me@gmail.com</span></p>
    </div>
  </>
)

export default ContactCard
