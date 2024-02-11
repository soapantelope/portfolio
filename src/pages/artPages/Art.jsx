import A1 from "../../assets/images/paintings/IMG_6614.png";
import A2 from "../../assets/images/paintings/IMG_6617.png";
import A3 from "../../assets/images/paintings/IMG_6618.png";
import A4 from "../../assets/images/paintings/IMG_6622.png";
import A5 from "../../assets/images/paintings/IMG_6625.png";
import A6 from "../../assets/images/paintings/IMG_6630.png";

export default function Art() {
  return (
    <>
      <h2>OIL PAINTINGS</h2>
      <div className="artDisplay">
        <img className="artPiece" src={A1}></img>
        <img className="artPiece" src={A2}></img>
        <img className="artPiece" src={A5}></img>
        <img className="artPiece" src={A4}></img>
        <img className="artPiece" src={A3}></img>
        <img className="artPiece" src={A6}></img>
      </div>
    </>
  );
}
