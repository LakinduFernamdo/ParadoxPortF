import Navbar from "./components/Navbar";
import Matrix from "./components/Matrix";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <Matrix />
      <Navbar />

      <section id="home" className="section">
        
      </section>

      <section id="profile" className="section">
        <Profile/>
      </section>

      <section id="stack" className="section">
        <TechStack/>
      </section>

      <section id="projects" className="section">
       
      </section>

      <section id="contact" className="section">
        
      </section>
    </>
  );
}

export default App;
