import React from 'react'
import './work.css'
const WorkAssignment= ({ project, description, imageUrl, deployLink, githubLink }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
    <h3>{project}</h3>
    <p>{description}</p>

    <div className='wraper'>
    <img src={imageUrl} alt={project} style={{ maxWidth: '100%' }} />
    </div>

    <div>
      <strong>Deployed Website:</strong>{' '}
      <a href={deployLink} target="_blank" rel="noopener noreferrer">
        {deployLink}
      </a>
    </div>
    <div>
      <strong>GitHub Repository:</strong>{' '}
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        {githubLink}
      </a>
    </div>
  </div>
  )
}

export default WorkAssignment