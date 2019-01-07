import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
      <div>
        <h2> About us page </h2>
        <p> We are an established </p>

        <ul>
            <li> <Link to="/about/leadership">leadership</Link></li>
        </ul>
      </div>
    )
  }

  export default About