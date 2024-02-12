import CatCanvas from "../CatCanvas";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="mainContent">
          <div>
            <h4>Hello, I'm</h4>
            <h1>SOPHIA ZHANG</h1>
          </div>
          <div className="frontInfo">
            I'm a freshman at Stanford University studying computer science. I'm
            interested in software development, game development, visual arts,
            3D modeling, AR/VR, and entreprenuership.
          </div>
        </div>
        <div className="catCanvas">
          <CatCanvas></CatCanvas>
        </div>
      </div>
    </>
  );
}
