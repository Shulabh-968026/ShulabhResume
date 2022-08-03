import React from 'react'
import shulabh  from "../../../images/shulabh.jpg"
function Projects() {
  return (
    <div className='profile-section mt-5' id='projects'>
        <div className='header'>
            <h2>Projects</h2>
            <button className='btn btn-secondary'>Edit</button>
        </div>
        <div className='drawline'></div>
        <div className='row mt-3'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className="card">
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner" style={{height:"250px"}}>
                            <div className="carousel-item active">
                                <img src={shulabh} alt="Los Angeles" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src={shulabh} alt="Chicago" className="d-block w-100"/>
                            </div>
                            <div className="carousel-item">
                                <img src={shulabh} alt="New York" className="d-block w-100"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>                    
                    <div className="card-body">
                        <h4 className="card-title">Project Title</h4>
                        <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                            <p className="card-text">Project Type - </p>
                            <p className="card-text">Timeing - </p>    
                        </div>
                        <p className="card-text">Frontend - </p>
                        <p className="card-text">Backend - </p>
                        <p className="card-text"><b>Summary - </b></p>   
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>

            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>

            </div>
        </div>
    </div>
  )
}

export default Projects

{/*
    <img className="card-img-top" src={shulabh} alt="Card image" width={200} height={200} />
*/}