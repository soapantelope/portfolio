import Logo from "../../../public/images/tossit/logocombined.png";
import SS1 from "../../../public/images/tossit/tossit1.png";
import RoleBar from "../../RoleBar";
import Awards from "../../Awards";

export default function Tossit() {
  const roles = [
    { name: "React.js" },
    { name: "Framer Motion" },
    { name: "Photoshop" },
    { name: "Illustrator" },
  ];

  const awards = [{ name: "TSA Nationals (Software Development) #1" }];

  return (
    <>
      <div className="solid"></div>
      <img className="bigImage" id="tossImage" src={SS1}></img>
      <img id="tossLogo" src={Logo}></img>
      <RoleBar roles={roles}></RoleBar>

      <div className="infoContainer">
        <div className="info">
          Toss-It is an educational web software that can be used in virtual and
          in-person classrooms to review material in an engaging way.
        </div>
      </div>

      <div className="awardsBox">
        <h4>AWARDS</h4>
        <Awards className="awards" awards={awards}></Awards>
      </div>
    </>
  );
}
