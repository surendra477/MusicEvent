import React from 'react';
import Header from './Components/Header_Footer/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import VenueNFO from "./Components/VenueNFO/index.js"
import Featured from "./Components/Featured";
import HighLights from "./Components/HighLights";
import Pricing from "./Components/Pricing"
import { Element } from "react-scroll";
import Location from "./Components/Location";
import Footer from "./Components/Header_Footer/Footer"
function App() {
  
  return (
    <div className="App">
      <Header className="adjustHeader" />
      <Element name="featured">
        <Featured className="adjustHeader" />
      </Element>
      <Element name="venuInfo">
        <VenueNFO className="adjustHeader" />
      </Element>
      <Element name="highlights">
        <HighLights className="adjustHeader" />
      </Element>

      <Element name="Pricing">
        <Pricing className="adjustHeader" />
      </Element>
      <Element name="Location">
        <Location className="adjustHeader" />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
