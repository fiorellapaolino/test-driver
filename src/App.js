import Topbar from "./sections/topbar/topbar";
import AboutUs from "./sections/about-us/about-us";
import Intro from "./sections/intro/intro";
import Navbar from "./sections/navbar/navbar";
import Services from "./sections/services/services";
import Contact from "./sections/contact/contact";
import CardData from "./components/services/cardData";
import './app.scss'


function App() {
  return (
    <div className="app">
      <div className="content">
        <Topbar />
        <div className="sections">
          <Intro>
            <Navbar />
          </Intro>
          <AboutUs />
          <Services details={CardData}/>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
