import React from 'react'
import "./style.css";
function Profile() {
  return (
    <div className='profile-section' id='profile'>
        <div className='header'>
            <h2>Profile</h2>
            <button className='btn btn-secondary'>Edit</button>
        </div>
        <div className='drawline'></div>
        <div className='profile-details'>
            <p><i className="fa-solid fa-user-large"></i> : Shulabh Dixit</p>
            <p><i className="fa-solid fa-envelope"></i> : shulabhdixit234@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i> : +91 6350272046</p>
        </div>
        <div className='social-links'>
            <a href='https://github.com/Shulabh-968026'>
                <i className="fa-brands fa-github"></i> : https://github.com/Shulabh-968026
            </a>
            <a href='https://www.linkedin.com/in/shulabh-dixit-143152177/'>
                <i class="fa-brands fa-linkedin"></i> : https://www.linkedin.com/in/shulabh-dixit-143152177/
            </a>
        </div>
    </div>
  )
}

export default Profile