import Matrix from "./components/Matrix.jsx";

function App() {
return (
<>
{/* Background */} <Matrix />

  {/* Temporary content */}
  <div style={{ position: "relative", zIndex: 1, textAlign: "center", paddingTop: "100px" }}>
    <h1>Welcome to My Portfolio</h1>
    <p>Matrix background working with React.</p>
  </div>
</>


);
}

export default App;
