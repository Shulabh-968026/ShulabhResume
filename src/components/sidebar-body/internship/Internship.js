import React from 'react'
import "./style.css"
function Internship() {
  return (
    <div className='profile-section mt-5' id='internship'>
    <div className='header'>
        <h2>Internship</h2>
        <button className='btn btn-secondary'>Edit</button>
    </div>
    <div className='drawline'></div>
    <div className='internship'> 
        <div className='internship-header'>
            <h3>Innowyze Global Solutions(Metromax Group)</h3>
            <p style={{fontSize:"20px",fontWeight:"500"}}>12/2020 - 06/2022</p>
        </div>
        <div className='internship-subsection'>
            <p><b>Software Developer - (WFH)</b></p>
            <p><b>Technology</b> - ReactJs, JavaScript, Redux, HTML, CSS, Material-UI</p>
            <p><b>Summary</b> - </p>
        </div>
    </div>
    <div className='internship'> 
        <div className='internship-header'>
            <h3>Third Origin LLC</h3>
            <p style={{fontSize:"20px",fontWeight:"500"}}>11/2021 - 12/2021</p>
        </div>
        <div className='internship-subsection'>
            <p><b>Python Developer - (WFH)</b></p>
            <p><b>Technology</b> - Python, Redis, Testing</p>
            <p><b>Summary</b> - </p>
        </div>
    </div>
</div>
  )
}

export default Internship