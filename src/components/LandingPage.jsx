import "./LandingPage.css";
import img from "../images/Professional Photo.jpg";
import Button from "@mui/material/Button";

// TODO - Need to write about statement
// TODO - Need to take professional photo

function About() {
  return (
    <div className="about-section">
      <div className="about-wrapper">
        <div className="about-text">
          <h2 className="about-header">Hi! I'm Chris</h2>
          <p className="about-content">
            Quis id commodo consectetur deserunt deserunt cillum sit. Lorem aute
            sit eu aute anim officia commodo laboris velit. Aliqua magna quis
            aliquip commodo dolor. Tempor est reprehenderit anim sit aliqua
            fugiat magna dolore sunt laborum.
          </p>
          <Button
            variant="outlined"
            href="#contact"
            sx={{
              padding: "20px 40px",
              backgroundColor: "#00ADB5",
              color: "#eeeeee",
              fontWeight: 500,
              fontSize: "1.1rem",
            }}
          >
            Let's Work Together
          </Button>
        </div>
        <img src={img} alt="Chris Schmittling" />
      </div>
    </div>
  );
}

export default About;
