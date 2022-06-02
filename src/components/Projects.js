import React from 'react'

function Projects() {
    return (
        <div className="container" id="projectCards">
        <h1>Projects</h1>
        <div className="col-sm-6">
        <div className="card">
          <div className="card-body img1">
            <h4 className="card-title">Assignment</h4>
            <p className="card-text">Description</p>
            <a href=""  className="btn btn-primary"
            target="_blank" rel="noopener noreferrer">Explore</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body img2">
            <h4 className="card-title">Project</h4>
            <p className="card-text">Description</p>
            <a href=""  className="btn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
          </div>
        </div>
      </div>
     
        <div className="flex-column text-white text-right" id="users" ></div>  
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body img3">
              <h4 className="card-title">Project</h4>
              <p className="card-text">Description</p>
              <a href=""  className="btn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
            </div>
          </div>
        </div>     
        
        <div className="col-sm-6">
        <div className="card justify-content-center">
          <div className="card-body img4">
            <h4 className="card-title">Assignment</h4>
            <p className="card-text">Description</p>
            <a href=""  className="btn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
            
          </div>
        </div>
      </div>    
      <div className="col-sm-6">
        <div className="card justify-content-center">
          <div className="card-body img5">
            <h4 className="card-title">Project</h4>
            <p className="card-text">Description</p>
            <a href="" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
          </div>
          </div>
        </div>
        <div className="col-sm-6">
        <div className="card justify-content-center">
          <div className="card-body img6">
            <h4 className="card-title">Project</h4>
            <p className="card-text">Description</p>
            <a href="" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Explore</a>
          </div>
          </div>
        </div>
      </div> 
  )
  }
  export default Projects