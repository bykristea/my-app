import React from 'react'
import Link from 'gatsby-link'
import './Header.css'



const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../img/logo.svg')} width="50" /></Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Life">Life</Link>
      <Link to="/About Me">About Me</Link>
      <Link to="/Contact"><button>Reach Out</button></Link>

    </div>
    
  </div>
)

export default Header
