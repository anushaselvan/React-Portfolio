import React from 'react';
import '../../styles/Projects.css';
import HawaikiShop from "../../components/assets/Hawaiki1.png";
import coffeeMate from "../../components/assets/CoffeeMate.png";
import WeatherDashboard from "../../components/assets/Weather.PNG";
import DayPlanner from "../../components/assets/Plan1.png";
const projects = [
  {
    name: "Hawaiki Shop",
    image: HawaikiShop,
    alt: "Hawaiki Shop App",
    desc: "A full stack E-commerce application for users to purchase business merchandise with authentication and database connections.",
    tech: "Nodejs, Express, Sequelize, Handlebars, Javascript, Jquery, mysql2, Izimodal",
    App: "https://hawaikishop.herokuapp.com/",
    Repo: "https://github.com/anushaselvan/Hawaiki-Shop.git",
  },
  {
    name: "Coffee Mate",
    image: coffeeMate,
    alt: "Coffee-mate App",
    desc: "The Coffee Morning App is designed for the user view during their morning coffee for their daily dose of internet goodness.",
    tech: "HTML, CSS, JavaScript, Moment.js, Third party APIs",
    App: "https://anushaselvan.github.io/Coffee-mate",
    Repo: "https://github.com/anushaselvan/Coffee-mate.git/",
  },
  {
    name: "Weather Dashboard",
    image: WeatherDashboard,
    alt: "Weather Dashboard App",
    desc: "A simple weather dashboard to display current weather of different cities including temperature, UV Index, wind speedand five day weather forecasts.",
    tech: "HTML, CSS, JQuery, Bootstrap, Moment.js, Open Weather - API",
    App: "https://anushaselvan.github.io/WeatherDashboard-Server-sideAPI",
    Repo: "https://github.com/anushaselvan/WeatherDashboard-Server-sideAPI.git",
  },
  {
    name: "Day Planner",
    image: DayPlanner,
    alt: "Day Planner App",
    desc: "The planner that allows the user to store tasks & agendas for a busy business day.",
    tech: "HTML, CSS, JQuery, Bootstrap, Moment.js",
    App: "https://anushaselvan.github.io/DayPlanner-JQuery/",
    Repo: "https://github.com/anushaselvan/DayPlanner-JQuery.git",
  },
];

export default function Work() {
  return (
    <div className="Work">
      <h1>Portfolio</h1>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <h2 className="project-name">{project.name}</h2>
            <p>{project.desc}<br></br>
            {project.tech}</p>
            <img
              className="project-img"
              src={project.image}
              alt={project.alt}
            />
          <h6>            
            <a href={project.App} target="_blank" rel="noreferrer"> Application</a> ||
            <a href={project.Repo} target="_blank" rel="noreferrer"> Repository</a>
          </h6>
          </div>))}
          </div></div>
  );
}
