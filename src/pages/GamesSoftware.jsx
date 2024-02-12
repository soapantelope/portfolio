import Dinnersaurs from "./gamesSoftwarePages/Dinnersaurs";
import Tossit from "./gamesSoftwarePages/Tossit";
import Gasser from "./gamesSoftwarePages/Gasser";

export default function GamesSoftware() {
  return (
    <>
      <Tossit />
      <Dinnersaurs />
      <Gasser />
      <div className="solid"></div>
    </>
  );
}
