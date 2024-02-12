import Logo from "../../assets/images/dinnerLogo.png";
import SS1 from "../../assets/images/dinnerSS/ss1.png";
import SS2 from "../../assets/images/dinnerSS/ss2.png";
import SS3 from "../../assets/images/dinnerSS/ss3.png";
import SS4 from "../../assets/images/dinnerSS/ss4.png";
import SS5 from "../../assets/images/dinnerSS/ss5.png";
import Concept1 from "../../assets/images/dinnerSS/concept1.png";

import RoleBar from "../../RoleBar";
import Awards from "../../Awards";
import DinoCanvas from "../../DinoCanvas";

export default function Dinnersaurs() {
  const roles = ["Team Lead", "Unity", "C#", "Blender"];

  const awards = [
    "2022 TSA Nationals Qualifier",
    "2022 TSA State #5",
    "2022 WSPTA Best Art / Animation",
    "2022 WSPTA Best Sound",
  ];

  return (
    <>
      <img className="bigImage" src={Concept1}></img>

      <img id="dinnerLogo" src={Logo}></img>
      <RoleBar roles={roles}></RoleBar>

      <div className="infoContainer" style={{ width: "50vw" }}>
        <div className="info">
          <p>
            You're an oviraptor being chased by several hungry dinosaurs. Steal
            eggs with DDR-style mechanics and feed them to the dinosaurs to
            avoid getting eaten!
          </p>
          <p>I led a team of 6 to create this video game.</p>
          <a
            target="_blank"
            className="linkButton"
            href="https://www.youtube.com/watch?v=3Z_JaI5T6Bk"
          >
            Watch Demo
          </a>
        </div>
      </div>

      <div className="twoColumnsSpecial">
        <div className="paperThing">
          <div className="awardsBox" style={{ width: "30vw" }}>
            <h4>AWARDS</h4>
            <Awards className="awards" awards={awards}></Awards>
          </div>
          {/* <div className="playButton">PLAY</div> */}
        </div>

        <div className="dinoContainer">
          <DinoCanvas></DinoCanvas>
        </div>
      </div>
      <div className="columns">
        <img className="displayImage2" src={SS1}></img>
        <img className="displayImage2" src={SS2}></img>
        <img className="displayImage2" src={SS3}></img>
        <img className="displayImage2" src={SS4}></img>
      </div>
    </>
  );
}
