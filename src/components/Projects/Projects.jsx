import React from 'react'
import './Projects.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <div className='project' id='project'>
      <h1>Recent Projects</h1>
      <div className='project__content'>
        <div className='proj'>
          <div className='proj__name'>ZenFlow</div>
          <a href='#'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href='#'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 70%</div>
            <div>Javascript 70%</div>
            <div>Javascript 70%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
        <div className='proj'>
          <div className='proj__name'>ZenFlow</div>
          <a href='#'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href='#'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 70%</div>
            <div>Javascript 70%</div>
            <div>Javascript 70%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
        <div className='proj'>
          <div className='proj__name'>ZenFlow</div>
          <a href='#'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href='#'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 70%</div>
            <div>Javascript 70%</div>
            <div>Javascript 70%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
        <div className='proj'>
          <div className='proj__name'>ZenFlow</div>
          <a href='#'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href='#'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 70%</div>
            <div>Javascript 70%</div>
            <div>Javascript 70%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects