import React from "react";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ProgrammingLogo from "./components/ProgrammingLogo";
import ProjectCard from "./components/ProjectCard";
import SocialMedia from "./components/SocialMedia";
import ContactForm from "./components/ContactForm";
import Soliditypict from "./Assets/logosementara.png"
import "./styles/App.css";

const skills = [
  { name: "Web Development", level: "Intermediate" },
  { name: "UI/UX Design", level: "Beginner" },
  { name: "Database Management", level: "Professional" }
];

const programmingLanguages = [
  { name: "JavaScript", logo: "./Assets/logosementara.png" },
  { name: "Python", logo: "./Assets/Python.png" },
  { name: "Solidity", logo: "./Assets/Solidity.png" }
];

const projects = [
  { title: "Blockchain DApp", description: "Decentralized document storage", link: "#" },
  { title: "Sentiment Analysis", description: "Bi-LSTM model for reviews", link: "#" }
];

const socialLinks = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
  { platform: "GitHub", url: "https://github.com/yourgithub" }
];

const App = () => {
  return (
    <div className="container">
      <AboutMe />
      
      <section className="p-5">
        <h2>Skills</h2>
        <div className="d-flex gap-3 flex-wrap">
          {skills.map((skill, index) => (
            <SkillCard key={index} skillName={skill.name} skillLevel={skill.level} />
          ))}
        </div>
      </section>

      <section className="p-5">
        <h2>Programming Languages</h2>
        <div className="d-flex gap-3 flex-wrap">
          {programmingLanguages.map((lang, index) => (
            <ProgrammingLogo key={index} name={lang.name} logo={lang.logo} />
          ))}
        </div>
      </section>

      <section className="p-5">
        <h2>Projects</h2>
        <div className="d-flex gap-3 flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} link={project.link} />
          ))}
        </div>
      </section>

      <section className="p-5">
        <h2>Social Media</h2>
        <div>
          {socialLinks.map((social, index) => (
            <SocialMedia key={index} platform={social.platform} url={social.url} />
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default App;
