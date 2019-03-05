import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Figuring life <br />out as I go</h1>
        <p>Hello Friends, thanks for stopping by. Browse around to see what I am up to, projects I'm working on, or to learn a little more about me.</p>
      <Link to="/page-2/">Let's be friends</Link> 
      <svg width="2560" height="172" viewBox="0 0 2560 172" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" fill="white"/>
      </svg>

      </div>
    </div>
   
  </div>
)

export default IndexPage
