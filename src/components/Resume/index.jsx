import React from 'react'
import './resume.css'

const Resume = () => {
  return ( 
<div>
    <h2>My Resume</h2>
    
    <div className="skillscontainer">

    <p>
        A brief overview of my skills:
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
        </ul>
    </p>

     </div>

    <a href="https://docs.google.com/document/d/1mjmrrt5JQ9HhM3g8oGNN0GmoUEPjP4pNamqyUaSqu8o/edit?usp=sharing" download className="btn btn-primary">Download My Resume</a>
</div>
  )
}

export default Resume