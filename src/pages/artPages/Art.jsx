import { Scroll } from "@react-three/drei";
import A1 from "../../assets/images/paintings/IMG_6614.png";
import A2 from "../../assets/images/paintings/IMG_6617.png";
import A3 from "../../assets/images/paintings/IMG_6618.png";
import A4 from "../../assets/images/paintings/IMG_6622.png";
import A5 from "../../assets/images/paintings/IMG_6625.png";
import A6 from "../../assets/images/paintings/IMG_6630.png";
import A7 from "../../assets/images/paintings/IMG_6189.png";
import A8 from "../../assets/images/paintings/IMG_6193.png";
import A9 from "../../assets/images/paintings/IMG_6628 2.png";

import S1 from "../../assets/images/sculptures/1.jpg";
import S2 from "../../assets/images/sculptures/2.jpg";
import S3 from "../../assets/images/sculptures/3.jpg";
import S4 from "../../assets/images/sculptures/A2.png";
import S5 from "../../assets/images/sculptures/C1.png";
import S7 from "../../assets/images/sculptures/C3.png";

import D2 from "../../assets/images/digital/2.jpg";
import D3 from "../../assets/images/digital/3.png";
import D4 from "../../assets/images/digital/4.png";
import D5 from "../../assets/images/digital/5.png";
import D6 from "../../assets/images/digital/6.png";
import D7 from "../../assets/images/digital/7.png";

export default function Art() {
  const paintings = [A1, A2, A3, A4, A5, A6, A9, A7, A8];
  const sculptures = [S1, S5, S7, S3, S2, S4];
  const digitals = [D3, D5, D6, D2, D4, D7];

  return (
    <div className="artPage">
      <h2>OIL PAINTINGS</h2>
      <div className="artDisplay">
        {paintings.map((painting) => (
          <img className="artPiece" src={painting}></img>
        ))}
      </div>

      <h2>SCULPTURES</h2>
      <div className="artDisplay">
        {sculptures.map((sculpture) => (
          <img className="artPiece" src={sculpture}></img>
        ))}
      </div>

      <h2>DIGITAL ART</h2>
      <div className="artDisplay">
        {digitals.map((digital) => (
          <img className="artPiece" src={digital}></img>
        ))}
      </div>
    </div>
  );
}
