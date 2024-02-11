import Navigator from "./Navigator";
import Home from "./pages/Home";
import GamesSoftware from "./pages/GamesSoftware";
import Contact from "./pages/Contact";
import Art3DModels from "./pages/Art3DModels";
import Dinnersaurs from "./pages/gamesSoftwarePages/Dinnersaurs";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="container">
        <Navigator></Navigator>

        <div className="pageContent" id="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="games-and-software"
              element={<GamesSoftware />}
            ></Route>
            <Route path="art-and-3D-models" element={<Art3DModels />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route
              path="games-and-software/dinnersaurs"
              element={<Dinnersaurs />}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
