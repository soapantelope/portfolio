import Logo from "../../assets/images/tossit/logocombined.png";
import SS1 from "../../assets/images/tossit/tossit1.png";
import RoleBar from "../../RoleBar";
import Awards from "../../Awards";

import S1 from "../../assets/images/tossit-new/s1.png";
import S2 from "../../assets/images/tossit-new/s2.png";
import S3 from "../../assets/images/tossit-new/s3.png";
import S4 from "../../assets/images/tossit-new/s4.png";
import S5 from "../../assets/images/tossit-new/s5.png";
import S6 from "../../assets/images/tossit-new/s6.png";
import S7 from "../../assets/images/tossit-new/s7.png";
import S8 from "../../assets/images/tossit-new/s8.png";
import S9 from "../../assets/images/tossit-new/s9.png";
import S10 from "../../assets/images/tossit-new/s10.png";

export default function Tossit() {
  const roles = ["Next.js/React.js", "Socket.io", "Figma", "Entreprenuership"];

  const awards = ["2022 TSA Nationals (Software Development) #3"];

  return (
    <>
      <div className="twoColumns">
        <img className="displayImage" src={S4}></img>
        <img className="displayImage" src={S7}></img>
      </div>

      <div className="tosslogo">TOSS-IT!</div>
      <RoleBar roles={roles}></RoleBar>

      <div className="twoColumnsAsymmetrical">
        <div className="infoContainer">
          <div className="info">
            <p>
              Toss-It is an educational webapp for teachers to host review
              sessions where students can create their own quiz questions and
              then solve each other’s questions.
            </p>
            <p>
              We are currently building out the second version, testing the app
              in school districts, and developing a business model.
            </p>
          </div>
        </div>
        <div className="awardsBox">
          <h4>AWARDS</h4>
          <Awards className="awards" awards={awards}></Awards>
        </div>
      </div>

      <div className="threeColumns">
        <img className="displayImage" id="displayImage" src={S1}></img>
        <img className="displayImage" id="displayImage" src={S2}></img>
        <img className="displayImage" id="displayImage" src={S3}></img>
        <img className="displayImage" id="displayImage" src={S4}></img>
        <img className="displayImage" id="displayImage" src={S5}></img>
        <img className="displayImage" id="displayImage" src={S9}></img>
        <img className="displayImage" id="displayImage" src={S6}></img>
        <img className="displayImage" id="displayImage" src={S8}></img>
        <img className="displayImage" id="displayImage" src={S7}></img>
      </div>
    </>
  );
}
