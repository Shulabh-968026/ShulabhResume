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
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Profile</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Summary</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Education</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Internship</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Projects</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Skills</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Language</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Additional Info</a>
                </li>
            </ul>
    </>
  )
}

export default Sidebar