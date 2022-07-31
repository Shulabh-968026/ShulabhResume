import React from 'react'

function Language() {
  return (
    <div className='profile-section mt-5' id='language'>
        <div className='header'>
            <h2>Languages</h2>
            <button className='btn btn-secondary'>Edit</button>
        </div>
        <div className='drawline'></div>
        <div className='internship'> 
            <div className='internship-header'>
                <h3>English</h3>
                <h3>Hindi</h3>
                <h3 style={{visibility:"hidden"}}>Hindi</h3>
            </div>
        </div>
    </div>
  )
}

export default Language