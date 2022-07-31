import React from 'react'
import "./style.css"
function Skills() {
  return (
    <div className='profile-section mt-5' id='skills'>
        <div className='header'>
            <h2>Skills</h2>
            <button className='btn btn-secondary'>Edit</button>
        </div>
        <div className='drawline'></div>
        <div className='skills'>
            <i className="fa-brands fa-python"></i>
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-android"></i>
            <i className="fa-brands fa-bootstrap"></i>
        </div>
        <div className='skills'>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3"></i>
        </div>
        <div className='skills'>
            <button className='btn btn-success'>Redux</button>
            <button className='btn btn-success'>Material-UI</button>
            <button className='btn btn-success'>Kotlin</button>
            <button className='btn btn-success'>MongoDB</button>
            <button className='btn btn-success'>MySql</button>
            <button className='btn btn-success'>Testing</button>
            <button className='btn btn-success'>Redis</button>
        </div>
    </div>
  )
}

export default Skills