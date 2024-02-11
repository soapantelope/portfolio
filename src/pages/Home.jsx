import CatCanvas from "../CatCanvas";

export default function Home() {
  return (
    <>
      <div className="homeTitle">
        <div>
          <h4>Hello, I'm</h4>
          <h1>SOPHIA ZHANG</h1>
        </div>
        <CatCanvas></CatCanvas>
      </div>
      <div className="frontInfo">
        I'm a freshman at Stanford University studying computer science. I'm
        interested in...
      </div>
    </>
  );
}
