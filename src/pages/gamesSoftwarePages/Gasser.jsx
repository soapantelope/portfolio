import S1 from "../../assets/images/gasserSS/0.png";
import S2 from "../../assets/images/gasserSS/1.png";
import S4 from "../../assets/images/gasserSS/3.png";
import S5 from "../../assets/images/gasserSS/4.png";
import S6 from "../../assets/images/gasserSS/5.png";
import S7 from "../../assets/images/gasserSS/9.png";
import RoleBar from "../../RoleBar";
import Awards from "../../Awards";

export default function Gasser() {
  const roles = [
    "Solo Development",
    "Unity",
    "C#",
    "Digital Painting",
    "2D Animation",
  ];

  const awards = [
    "OGPC (Oregon Game Project Challenge) Best in Show",
    "2021 WSPTA Best Individual Game",
    "2021 WSPTA Best Art/Animation",
  ];

  return (
    <>
      <img className="bigImage" src={S4}></img>

      <div className="gasslogo">GASSER</div>
      <RoleBar roles={roles}></RoleBar>

      <div className="twoColumnsAsymmetrical2">
        <div className="awardsBox">
          <h4>AWARDS</h4>
          <Awards className="awards" awards={awards}></Awards>
        </div>
        <div className="infoContainer">
          <div className="info">
            <p>
              In a hopeless, desolate world ravaged by chemical warfare, you
              fall into the last forest. However, as a bio-engineered war
              weapon, can only survive by sucking the life out of the forest and
              destroying it.
            </p>
            <p>
              Gasser is a Hollow Knight-inspired side-scrolling platformer that
              I solo developed during high school.
            </p>
          </div>
        </div>
      </div>

      <div className="threeColumns">
        <img className="displayImage" src={S1}></img>
        <img className="displayImage" src={S2}></img>
        <img className="displayImage" src={S4}></img>
        <img className="displayImage" src={S5}></img>
        <img className="displayImage" src={S6}></img>
        <img className="displayImage" src={S7}></img>
      </div>

      <div className="solid"></div>
    </>
  );
}
