import NavBar from "./components/NavBar";
import LeadershipTeam from "./components/LeadershipTeam";
import './App.css';

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

      <footer>

      </footer>
    </main>
  );
}

export default App;
