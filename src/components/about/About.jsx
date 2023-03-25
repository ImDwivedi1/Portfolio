import React from "react";
import "./about.css";
import ME from "../../assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="abt-img" src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ completed</small>
            </article>
          </div>
          <p className="mt-3">
            Hi my name is Himanshu, I was born in 1994. My first
            introduction with the computer was in 2004. Since then I always been
            intrested in computer applications and programming languages.
            <br />
            I have completed my masters degree in computer applications in 2019.
            Since, then I have been continuosly involved into web developement
            for clients as a freelancer as well as in my profession as a
            developer.
            <br />
            When i was in my college i have done many projects on different
            technologies such as C, C++, Java, JavaScript. JavaScript was my
            favourite language. So, I have choosen my career as JavaScript
            Developer.
            <br />
            Till now, I have done 100+ projects on different JavaScript
            Frameworks such as React, Next, Vue, Svelte, Nuxt, Node. Contact me
            using the below button and we will discuss something amazing.
            <br />
            <br />
            Thanks,
            <br />
            Himanshu
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
