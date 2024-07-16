import React from 'react'
import ImageGallery from 'react-photo-album';
import { NavLink } from "react-router-dom"
import './Projects.css'
const glPhotos = [{src: "https://i.imgur.com/sERbRFp.png",width:924,height:960},{src:"https://i.imgur.com/j2JojWK.png",width:793,height:719},
                  {src:"https://i.imgur.com/NtdjsDC.png",width:997,height:960},{src:"https://i.imgur.com/SOlWPPR.png",width:1000,height:963},
                  {src:"https://i.imgur.com/x4qOWqm.png",width:998,height:968}];


const cnbPhotos = [{src: "https://i.imgur.com/dFDsDFy.jpg",width:1440,height:948},{src:"https://i.imgur.com/pNBKYej.jpg",width:1080,height:1350},
  {src:"https://i.imgur.com/ct9amC2.jpg",width:1080,height:1350},
  {src:"https://i.imgur.com/W7G3Nec.jpg",width:960,height:1504},
  {src:"https://i.imgur.com/c7ubnSN.jpg",width:1200,height:1800},
  {src:"https://i.imgur.com/n17MpDP.jpg",width:1200,height:1800},
  {src:"https://i.imgur.com/OJPWqLH.jpg",width:1440,height:987},
  {src:"https://i.imgur.com/MnL7GVt.jpg",width:1200,height:1800}];


const luthierPhotos = [{src: "https://i.imgur.com/5Nhr7nb.jpg",width:4128,height:3096},{src:"https://i.imgur.com/gKEACTm.jpg",width:3096,height:4128},
  {src:"https://i.imgur.com/lnXFoSQ.jpg",width:720,height:1280},
  {src:"https://i.imgur.com/QN2zVPx.jpg",width:3096,height:4128}];

export const Projects = () => {
  return (
    <div className='main-container projects-box'>
      <h4 className='projects-header'><NavLink className ='projects-link' to="https://github.com/StamatisMat?tab=repositories" target='_blank'>This web page</NavLink></h4>
      <div className='projects-paragraph'>
        <text>
        The idea of making a site came about while attending a udemy course about Java Springboot.<br />
        I wanted to tinker with ideas and provide myself with practical knowlege of the framework.<br />
        Then I needed a front end, so I went with react as it has good component architecture and is very relevant.<br />
        </text>
      </div>
      <h4 className='projects-header'><NavLink className ='projects-link' to="https://github.com/nikos-pap/Lab1-Graphics" target='_blank'>Collision</NavLink></h4>
      <div className='projects-paragraph'>
        <text>
        The idea came when an team assignment in OpenGL gave the team the idea of making a physics engine from scratch. <br />
        We approached collision handling using shapes instead of vertices, that made this physics engine different than others,<br />
        although resource hungry. It is made using C++ OpenGL and loose pattern design.
        </text>
      </div>
      <div className = 'projects-images'>
        <ImageGallery layout='rows' photos={glPhotos}/>
        <p> Example photos</p>
      </div>
      <h4 className='projects-header'><NavLink className ='projects-link' to="https://github.com/StamatisMat/RadioBot" target='_blank'>RadioBot</NavLink></h4>
      <div className='projects-paragraph'>
        <text>
        The idea is that there should be a discord bot that plays music from online radio streams using only an index. <br /> 
        The idea came when my friends and I were tired of listening to the same playlist over and over again using other bots on discord. <br />
        It is made using NodeJS and many libraries.
        </text>
      </div>
      <h4 className='projects-header'><NavLink className ='projects-link' to="https://www.instagram.com/coinsandballoons/" target='_blank'>Coins & Balloons</NavLink></h4>
      <div className='projects-paragraph'>
        <p>
        The band came about on July of 2022 when the lead singer Theodore asked me to jam with the other guys John(bass) and Raphael(drums). <br/>
        Since then, I've been the lead guitarist. Then another guitarist Prodromos joined, we've written music and played live in lots of venues.<br />
        Our style is a blend of grunge and hard rock with some metal and progressive elements, all by our different music personalities.
        </p>
      </div>
      <div className = 'projects-images'>
        <ImageGallery layout='rows' photos={cnbPhotos}/>
        <p>Concert Photos from opening Nightstalker circa December 2023. Photos by: Konstantinos Kokoras</p>
      </div>

      <h4 className='projects-header'>Luthiership</h4>
      <div className='projects-paragraph'>
        <p>
        Since I became a guitarist, I always wanted to get more instruments. So I thought a good hobby would be to make them from scratch! <br />
        After a lot of hard work, I've made 3 instruments. 2 electric guitars and 1 electric bass that I use daily. In the pictures you can <br/>
        get a glimpse of the building process of my dream electric guitar, my Explorer.
        </p>
      </div>
      <div className = 'projects-images'>
        <ImageGallery layout='rows' photos={luthierPhotos}/>
        <p>Photos of the building process of my Explorer guitar.</p>
      </div>
    </div>

  )
}

export default Projects;