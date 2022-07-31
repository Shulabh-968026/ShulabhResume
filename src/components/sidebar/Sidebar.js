import React from 'react'
import profile from "../../images/shulabh.jpg"
import "./sidebar.css"
function Sidebar() {
  return (
    <>
        <div className='profile'>
            <img src={profile} alt={"profile"} className="profile-image"/>
            <h2 className='profile-name'>Shulabh Dixit</h2>
        </div>
            <ul className='navbar'>
                <li className='nav-items'>
                    <a href='#profile' className='nav-links'>Profile</a>
                </li>
                <li className='nav-items'>
                    <a href='#summary' className='nav-links'>Summary</a>
                </li>
                <li className='nav-items'>
                    <a href='#education' className='nav-links'>Education</a>
                </li>
                <li className='nav-items'>
                    <a href='#internship' className='nav-links'>Internship</a>
                </li>
                <li className='nav-items'>
                    <a href='#projects' className='nav-links'>Projects</a>
                </li>
                <li className='nav-items'>
                    <a href='#skills' className='nav-links'>Skills</a>
                </li>
                <li className='nav-items'>
                    <a href='#language' className='nav-links'>Language</a>
                </li>
                <li className='nav-items'>
                    <a href='#info' className='nav-links'>Additional Info</a>
                </li>
            </ul>
    </>
  )
}

export default Sidebar