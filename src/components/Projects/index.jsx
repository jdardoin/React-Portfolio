import React from 'react'
import WorkAssignment from '../WorkAssignment'
//  import workpic from '../../images/work.jpg'
import fanstyfootball from '../../images/GridironGrandmaster.jpeg'
import marvel from '../../images/marvel.jph.avif'
import pwa from '../../images/pwa.png'
import notetaking from '../../images/NoteTaking.jpg'
 import password from '../../images/passwordgen.png'
 import weather from '../../images/Weather.png'

const Projects = () => {
  const workAssignments = [
    {
      project: 'Gridiron Grandmaster',
      description: 'A fantasy football app that allows users to be Team Owners and compete against each other in a season long fantasy football league.',
      imageUrl: fanstyfootball,
      deployLink: 'https://gridiron-grandmaster-ab047e826379.herokuapp.com/',
      githubLink: 'https://github.com/ryanharrishtx/gridiron-grandmaster',
    },
    {
      project: 'Marvel Search Engine',
      description: 'Application where users can search for their favorite Marvel characters and see their stats and comics they have appeared in.',
      imageUrl:  marvel,
      deployLink: 'https://andresrey01.github.io/group-project1/',
      githubLink: 'https://github.com/AndresRey01/group-project1',
    },

    {
      project: 'PWA Text Editor',
      description: 'A text editor that will allow users to install from the browser',
      imageUrl :pwa,
      deployLink: 'https://pwa-text-editor-ixy8.onrender.com/',
      githubLink: 'https://github.com/jdardoin/PWA-Text-Editor',
    },

    {
      project: 'Note Taking App',
      description: 'An application that will allow uers to create a new note and save each note',
      imageUrl:  notetaking,
      deployLink: 'https://aqueous-taiga-83368-2e67a270c7f8.herokuapp.com/',
      githubLink: 'https://github.com/jdardoin/note-tracker-11',
    },

    {
      project: 'Password Generator',
      description: 'Generates a random password based on user input',
      imageUrl:  password,
      deployLink: 'https://jdardoin.github.io/password-project-3/',
      githubLink: 'https://github.com/jdardoin/password-project-3',
    },

    {
      project: 'Weather Dashboard',
      description: 'Give the current weather and 5 day forecast for a city that the user inputs',
      imageUrl: weather,
      deployLink: 'https://jdardoin.github.io/Weather-Dashboard/',
      githubLink: 'https://github.com/jdardoin/Weather-Dashboard',
    },
    //Add more work assignments as needed
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