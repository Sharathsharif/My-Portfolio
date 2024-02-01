import "./Home.css";

function About() {
  return (
    <section id="About">
      <h1 className="Title">About Me :</h1>
      <br />
      <br />
      <p>
           Eager to launch my career in software development, I've honed my skills
        in HTML, CSS, Bootstrap, JavaScript, and ReactJS through online courses,
        supplemented by my knowledge in API integration and Redux. My
        proficiency extends to GitHub, ensuring efficient code management and
        collaboration. I've also engaged in numerous online workshops to stay at
        the forefront of industry trends and technologies. With a blend of
        theoretical knowledge and practical skills, I am ready to contribute to
        innovative projects, bringing enthusiasm, creativity, and a
        problem-solving mindset to a dynamic team.
      </p>

      <br />
      <br />
      <div className="aboutsection">
        <div className="Experience">
          <a href="#experience.skills">
            <i className="bi bi-person-workspace" id=" experience_Logo"></i>
            <h2 className="Title">Experience</h2>
            <p>
              {" "}
              <strong>Fresher </strong>
            </p>
          </a>
        </div>
        <div className="OverAllProjectDetails">
          <a href="#Skill">
            <i className="bi bi-kanban"></i>
            <h2 className="Title">Skills</h2>
            <p>
              {" "}
              <strong>Front-end Developer</strong>{" "}
            </p>
          </a>
        </div>
        <div className="OverAllProjectDetails">
          <a href="#Projectss">
            <i className="bi bi-kanban"></i>
            <h2 className="Title">Completed</h2>
            <p>
              <strong>3 Projects</strong>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
