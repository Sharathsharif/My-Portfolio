import "./Home.css";

function About() {
  return (
    <section id="About">
      <h1 className="Title">About Me :</h1>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
        laboriosam unde saepe ex fugit assumenda temporibus architecto porro
        molestiae repudiandae, consequuntur placeat ducimus labore ad veniam
        culpa quos autem beatae, tenetur dolorem. Praesentium, fuga. Ea quas
        maiores dolore incidunt maxime esse necessitatibus, deleniti velit
        mollitia modi sapiente, quo quidem. Reprehenderit perspiciatis
        architecto reiciendis asperiores saepe provident vitae quas autem,
        voluptatibus amet aliquid sequi minus repellat. Corporis, quia.
        Aspernatur labore molestiae nemo necessitatibus aut culpa, nisi quod
        nostrum ut reiciendis totam maxime est quis autem magni repudiandae sit
        laborum saepe in veniam. Hic aspernatur aliquam quaerat ex, quae aut
        atque nesciunt.
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
