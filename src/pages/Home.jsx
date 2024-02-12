import CatCanvas from "../CatCanvas";
import Cat from "../assets/images/cat.png";

export default function Home() {
  return (
    <>
      <div className="main">
        <img className="cat" src={Cat}></img>

        <div className="mainContent">
          <div>
            <h4>Hello, I'm</h4>
            <h1>SOPHIA ZHANG!</h1>
          </div>
          <div className="frontInfo">
            <p>
              I'm a freshman at Stanford University studying computer science.
              I'm interested in software development, game development, visual
              arts, 3D modeling, AR/VR, and entreprenuership.
            </p>
            <p>On the side, I swim, lift weights, ski/snowboard, and doodle!</p>
          </div>
        </div>
      </div>
    </>
  );
}
