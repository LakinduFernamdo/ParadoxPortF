import "../styles/profile.css";
import profileImg from "../assets/profile.jpg"; // put your image here

function Profile() {
  return (
    <section className="profile-wrapper">

      {/* LEFT SIDE IMAGE */}
      <div className="profile-left">
        <img src={profileImg} alt="Lakindu" />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="profile-right">
        <h1 className="title">Hi, I'm Lakindu</h1>

        <h3 className="subtitle">
          Cyber Security Analyst
        </h3>

        <p className="description">
          Undergraduate student at University of Sri Jayewardenepura
          studying Computer Science, Statistics and Mathematics.
          Currently an intern at Sri Lanka Cyber Security Emergency
          Readiness Team (SLCERT).
        </p>
      </div>

    </section>
  );
}

export default Profile;