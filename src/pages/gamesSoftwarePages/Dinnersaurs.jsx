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
  const roles = [
    { name: "Team Lead" },
    { name: "Unity" },
    { name: "C#" },
    { name: "Blender" },
  ];

  const awards = [
    { name: "TSA Nationals Qualifier" },
    { name: "TSA State #5" },
    { name: "WSPTA Best Art / Animation" },
    { name: "WSPTA Best Sound" },
  ];

  return (
    <>
      <img className="bigImage" src={Concept1}></img>

      <img id="dinnerLogo" src={Logo}></img>
      <RoleBar roles={roles}></RoleBar>

      <div className="infoContainer">
        <div className="info">
          You're an oviraptor being chased by several hungry dinosaurs. Steal
          eggs with DDR-style mechanics and feed them to the dinosaurs to avoid
          getting eaten!
        </div>
      </div>

      <div className="twoColumns">
        <div className="paperThing">
          <div className="awardsBox">
            <h4>AWARDS</h4>
            <Awards className="awards" awards={awards}></Awards>
          </div>
          <div className="playButton">PLAY</div>
        </div>

        <div className="dinoContainer">
          <DinoCanvas></DinoCanvas>
        </div>
      </div>
      <img className="bigImage" src={SS2}></img>
      <img className="bigImage" src={SS3}></img>
      <img className="bigImage" src={SS4}></img>
    </>
  );
}
