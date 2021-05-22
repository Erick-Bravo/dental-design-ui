import NavBar from "./components/NavBar";
import LeadershipTeam from "./components/LeadershipTeam";
import './App.css';
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <main className="App">

      <header className="header">
        <section className="top-message">
          <p>Dental benifits that reward you for brushing your teeth</p>
          <iframe src="https:/player.vimeo.com/video/327864855?app_id=122963" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Beam: Smarter Dental Care" />
        </section>
      </header>

      <NavBar />

      <section className="center">
        <section className="center-message">

          <h2>Our Mission & Vision</h2>

          <section className="light-blue-line-container">
            <div className="light-blue-line"></div>
          </section>

          <p>Beam Dental was founded on the idea that everyone deserves access to dental care, centering our mission around closing the gap of the 100 million Americans who don't. By blending innovative technology with traditional insurance policies, we've been able to bring incredible value to the employee benefits market—both disrupting insurance forever and delivering on our mission. </p>
          <p>Beam’s vision is to deliver a fundamentally unique approach to coverage by incorporating dental hygiene behavior into policy pricing at renewal.</p>
        </section>
      </section>

      <LeadershipTeam />

      <section className="investors-container">

        <section className="black-line-container">
          <h2>Our Investors</h2>
          <div className="black-line"></div>

          <section className="logos">
            <img src="./drive+capital White.png" alt="drive capital" />
            <img src="./cropped LACV Logo 01 White.png" alt="lewis and clark" />
            <img src="./kleiner perkins kleiner perkins Gray.png" alt="kleiner" />
            <img src="./Georgian Partners Gray.png" alt="georgia partners" />
          </section>
        </section>

      </section>

      <footer>
        <section className="footer-contents">

          <img src="https://beam.dental/assets/71e9428553ee396edc7b33877ee6c5f4.svg" alt="Beam-Dental-logo" />

          <div className="footer-links">
            <p>Explore</p>
            <NavLink to="*">I'm a Broker</NavLink>
            <NavLink to="*">I'm a Member</NavLink>
            <NavLink to="*">I'm a Employer</NavLink>
            <NavLink to="*">I'm a Provider</NavLink>
          </div>
          <div className="footer-links">
            <p>Learn</p>
            <NavLink to="*">FAQ's</NavLink>
            <NavLink to="*">Company Blog</NavLink>
            <NavLink to="*">Product Blog</NavLink>
          </div>
          <div className="footer-links">
            <p>Company</p>
            <NavLink to="*">About</NavLink>
            <NavLink to="*">Careers</NavLink>
            <NavLink to="*">Terms</NavLink>
            <NavLink to="*">Privacy</NavLink>
          </div>
          <div className="footer-links">
            <p>Resources</p>
            <NavLink to="*">Find a Dentist</NavLink>
            <NavLink to="*">Constact Us</NavLink>
            <NavLink to="*">Get a Quote</NavLink>
            <NavLink to="*">Paper Claims</NavLink>
          </div>
          <div className="footer-links">
            <p>Connect</p>
            <NavLink to="*">Linkedin</NavLink>
            <NavLink to="*">Twitter</NavLink>
            <NavLink to="*">Facebook</NavLink>
            <NavLink to="*">Instagram</NavLink>
          </div>

        </section>

      </footer>
    </main>
  );
}

export default App;
