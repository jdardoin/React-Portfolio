import React from 'react'

const Resume = () => {
  return ( 
  <div>
    <h2>My Resume</h2>
    <p>
        Here is a brief overview of my skills and experiences:
        <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Experience 1</li>
            <li>Experience 2</li>
        </ul>
    </p>
    <a href="/path/to/your/resume.pdf" download className="btn btn-primary">Download My Resume</a>
</div>
  )
}

export default Resume