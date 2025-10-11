import React from "react";
import styles from "./Techstack.module.css";

function About() {
  return (
    <section className={styles.techstack_section}>
      <p>“From frying pans to front-ends.”</p>
      <p>HI, I'm Dean and I make fun, creative things on my day off.</p>
      <p>
        I am a person who is eager to take on new and exciting challenges. I'm a
        front-end developer. I build webpages and applications for the internet
        that are engaging, responsive and most importantly accessible.
      </p>
      <p>
        One of my favorite passions is learning and acquiring new skill sets
        that I can apply into my life and career.
      </p>
      <div>
        <div>
          <h2>Resume</h2>
          <h3>services and solutions</h3>
        </div>
        <ul>
          <li>
            <h2>project management</h2>
            <p>
              Managing and overseeing a range of projects, navigating them
              through the entire project life cycle.
            </p>
          </li>
          <li>
            <h2>front-end development</h2>
            <p>
              Developed responsive and accessible web solutions and applications
              using React, JavaScript, HTML5, CSS3, and Firebase.
            </p>
          </li>
          <li>
            <h2>production planning</h2>
            <p>
              Conduct forecasting, strategic planning, and precise execution of
              production orders within expansive manufacturing facilities.
            </p>
          </li>
          <li>
            <h2>leadership</h2>
            <p>
              I provide mentorship and oversight to teams involved in various
              operations, aligning organizational objectives with long-term
              goals through a strategic mindset.
            </p>
          </li>
          <li>
            <h2>photography</h2>
            <p>
              Demonstrated proficiency in collaborating with clients, as well as
              in staging and photographing a diverse array of products tailored
              for online sales.
            </p>
          </li>
          <li>
            <h2>data analysis</h2>
            <p>
              Proficient in the systematic collection, organization, and
              analysis of diverse datasets, adeptly utilizing Excel, Google
              Sheets, Power BI, and JavaScript to showcase advanced skills in
              comprehensive data management.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
