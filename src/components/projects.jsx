import "./projects.css";
import ecommerce from "../assets/Ecommerce.jpg";
import Newsimage from "../assets/News Image.png";
import Restaurant from "../assets/restaurant-icon.png";

export default function Projects() {
  return (
    <div id="Projectss">
      <h1 className="Title">
        <i className="bi bi-kanban"></i> Projects:
      </h1>

      <div className="Project_container">
        <div className="single_project">
          <h2>SS Restaurant (restautrant website)</h2>
          <p>
            'SS Restaurant,' a responsive website using HTML, CSS, JavaScript,
            React.js, Bootstrap 5, and React Routing. This platform offers an
            intuitive interface to explore daily specials, offers, and the full
            menu, with added functionality for hassle-free restaurant event
            bookings. My development expertise with React.js and Bootstrap
            ensured a visually appealing design and smooth user navigation,
            enhancing the overall user experience."
          </p>
          <button className="Project_github_Link_btn">
            <a href="https://github.com/Sharathsharif/SS-Restaurant" target="blank" > GitHub Link</a></button>
          <button className="Project_live_Link_btn">
          <a href="https://ssrestaurant.netlify.app/">Live Link</a></button>

        </div>

        <img className="project_images" src={Restaurant} alt="" />
      </div>

      <hr />

      <div className="Project_container">
        <img className="project_images" src={Newsimage} alt="" />
        <div className="single_project">
          <h2>Quick News (News Website)</h2>
          <p>
            "I created 'Quick News,' a web app using HTML, CSS, JavaScript, and
            React.js, integrating a free news API for live global news updates.
            As the lead developer, I focused on intuitive UI design,
            highlighting my proficiency in front-end development and effective
            API integration for real-time information retrieval."
          </p>

          <button className="Project_github_Link_btn">
          <a href="https://github.com/Sharathsharif/QuickNews" target="blank" > GitHub Link</a></button>
          <button className="Project_live_Link_btn">Live Link</button>
        </div>
      </div>

      <hr />

      <div className="Project_container">
        <div className="single_project">
          <h2> Deals R Deals ( Ecommmerce Website)</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            veritatis tempora rem ipsa est. Esse at accusamus sunt similique
            dolorum.
          </p>
          <button className="Project_github_Link_btn">
            <a href="#"> GitHub Link</a></button>
          <button className="Project_live_Link_btn">Live Link</button>
        </div>
        <img className="project_images" src={ecommerce} alt="" />
      </div>
    </div>
  );
}
