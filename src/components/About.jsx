import React from 'react'
import { Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
    
        <h1>This is about us page</h1>
        <Outlet/>
    </div>
  )
}

export default About;