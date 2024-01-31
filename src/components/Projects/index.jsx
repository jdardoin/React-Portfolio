import React from 'react'
import WorkAssignment from '../WorkAssignment'
import workpic from '../../images/work.jpg'

const Projects = () => {
  const workAssignments = [
    {
      project: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: workpic,
      deployLink: 'https://example.com/project1-deploy',
      githubLink: 'https://github.com/example/project1',
    },
    {
      project: 'Project 1',
      description: 'Description for Project 1',
      imageUrl:  workpic,
      deployLink: 'https://example.com/project1-deploy',
      githubLink: 'https://github.com/example/project1',
    },

    {
      project: 'Project 1',
      description: 'Description for Project 1',
      imageUrl:  workpic,
      deployLink: 'https://example.com/project1-deploy',
      githubLink: 'https://github.com/example/project1',
    },

    {
      project: 'Project 1',
      description: 'Description for Project 1',
      imageUrl:  workpic,
      deployLink: 'https://example.com/project1-deploy',
      githubLink: 'https://github.com/example/project1',
    },

    {
      project: 'Project 1',
      description: 'Description for Project 1',
      imageUrl:  workpic,
      deployLink: 'https://example.com/project1-deploy',
      githubLink: 'https://github.com/example/project1',
    },

    {
      project: 'Project 1',
      description: 'Description for Project 1',
      imageUrl:  workpic,
      deployLink: 'https://example.com/project1-deploy',
      githubLink: 'https://github.com/example/project1',
    },
    // Add more work assignments as needed
  ];
  return (
    <div className='projectcontainer'>
    <h2>My Past Work Assignments</h2>
    {workAssignments.map((assignment, index) => (
      <WorkAssignment key={index} {...assignment} />
    ))}
  </div>
  )
}

export default Projects