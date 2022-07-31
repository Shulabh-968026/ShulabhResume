import React from 'react'
import "./style.css"
function Education() {
  return (
    <div className='profile-section mt-5' id='education'>
        <div className='header'>
            <h2>Education</h2>
            <button className='btn btn-secondary'>Edit</button>
        </div>
        <div className='drawline'></div>
        <div className='education'>
            <div className='education-header'>
                <h3>Government Engineeing College</h3>
                <p style={{fontSize:"20px",fontWeight:"500"}}>07/2017 - 10/2021</p>
            </div>
            <div className='education-subsection'>
                <p>Ajmer, Rajasthan, India</p>
                <p><b>Course</b> - Computer Engineeing</p>
                <p><b>Percentage</b> - 73%</p>
            </div>
        </div>
    </div>
  )
}

export default Education