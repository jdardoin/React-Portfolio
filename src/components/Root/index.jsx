import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import './nav.css'

const Root = () => {
  return (
    <>
        <ul className='nav'>
            <li>
                <Link to='/'>home</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
            <li>
            <Link to='/contact'>Contact</Link>
            </li>
                
        </ul>

        <Outlet/>
    </>
  )
}

export default Root
