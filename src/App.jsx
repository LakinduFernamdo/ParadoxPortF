import Navbar from "./components/Navbar";
import Matrix from "./components/Matrix";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
function App() {
  return (
    <>
      <Matrix />
      <Navbar />

     
      <section id="profile" className="section">
        <Profile/>
      </section>

      <section id="education" className="section">
        <Education/>
      </section>

      <section id="experience" className="section">
        <Experience/>
      </section>

      <section id="stack" className="section">
        <TechStack/>
      </section>

      <section id="projects" className="section">
       <Projects/>
      </section>

      <section id="contact" className="section">
        
      </section>
    </>
  );
}

export default App;
