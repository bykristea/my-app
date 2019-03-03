import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Figuring life out as I go</h1>
        <p>Hello Friends, thanks for stopping by. Browse around to see what I am up to, projects I'm working on, or to learn a little more about me.</p>
      <Link to="/page-2/">Let's be friends</Link> 
      </div>
    </div>
   
  </div>
)

export default IndexPage
