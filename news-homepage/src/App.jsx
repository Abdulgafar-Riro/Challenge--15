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
    <main className="main-container">
      <header className="NavBars">
        <NavBar />
      </header>

      <section className="container">
        <article className="top">
          <TopLeft />
          <TopRight />
        </article>
        <article className="features">
          <Feature1 />
          <Feature2 />
          <Feature3 />
        </article>
        <Footer />
      </section>
    </main>
  );
}

export default App;
