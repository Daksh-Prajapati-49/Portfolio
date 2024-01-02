import React from 'react'
import './Projects.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <div className='project' id='project'>
      <h1>Recent Projects</h1>
      <div className='project__content'>
        <div className='proj'>
          <div className='proj__name'>Portfolio</div>
          <a href='https://github.com/Daksh-Prajapati-49/Portfolio' alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href='https://github.com/Daksh-Prajapati-49/Portfolio'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 59.7%</div>
            <div>CSS 34.2%</div>
            <div>HTML 6.1%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
        <div className='proj'>
          <div className='proj__name'>GoCabs</div>
          <a href='https://github.com/Daksh-Prajapati-49/GoCabs'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href='https://github.com/Daksh-Prajapati-49/GoCabs'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 97.5%</div>
            <div>CSS 0.5%</div>
            <div>HTML 2.0%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
        <div className='proj'>
          <div className='proj__name'>Travel Advisor</div>
          <a href='https://github.com/Daksh-Prajapati-49/travel_advisor'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href='https://github.com/Daksh-Prajapati-49/travel_advisor'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 75.0%</div>
            <div>CSS 18.9%</div>
            <div>HTML 6.1%</div>
          </h3>
          <div className='proj__footer'>
            <h3><GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/> Stars</h3>
            <h3>Updated on October 27, 2021</h3>
          </div>
        </div>
        <div className='proj'>
          <div className='proj__name'>StayWell</div>
          <a href='#'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>Clone Project</a>
          <a href='#'alt='zenflow'> <GitHubIcon style={{ fontSize: "1rem", position:"relative", top:"2px"}}/>  Repo</a>
          <h3>Languages: 
            <div>Javascript 77.2%</div>
            <div>CSS 20.8%</div>
            <div>HTML 1.1%</div>
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