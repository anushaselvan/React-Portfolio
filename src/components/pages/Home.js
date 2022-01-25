import React from 'react';
import '../../styles/Pages.css';


export default function Home() {
  return (
    <div className="page-style">
      <h1>About me</h1>
      <p>
      <img className="prof-pic" src ={require('../../components/assets/Profile1.jpg')} alt="avatar"/>
      Hi, I am Anusha. I am a Full stack Developer. After graduating in 2010 with a Bachelor's degree in Computer Science Engineering, 
      I spent over two years performing software
       testing for a multi national company.
      I acquired project and time management skills, as well as the ability to communicate with team members and clients while
       effectively meeting milestones and deadlines.<br></br>
      I am currently doing a Coding Bootcamp in Monash University, to keep me up to date with the current technology.
      I am a web developer with Express, Node and React expertise.I have worked on a multitude of web based projects, developing 
      responsive layouts and providing
      eCommerce solutions, product branding and graphic design. <br></br>These days my time is spent researching, designing and coding
       dynamic web applications. 
      When I am not coding, I am definitely enjoying the great outdoors!

      </p>
    </div>
  );
}
