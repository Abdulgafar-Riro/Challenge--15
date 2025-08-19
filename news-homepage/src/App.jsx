import NavBar from "./components/NavBar";

import TopRight from "./components/TopRight";
import TopLeft from "./components/TopLeft";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="NavBars">
        <NavBar />
      </div>

      <div className="container">
        <div className="top">
          <TopLeft />
          <TopRight />
        </div>
        <div className="features">
          <Feature1 />
          <Feature2 />
          <Feature3 />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
