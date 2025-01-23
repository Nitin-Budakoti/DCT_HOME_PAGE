// app/digitalTransformation/page.tsx
import React from "react";
import NavBar from "../components/NAVBAR";
import Heading from "./components/heading";
import Step1 from "./components/First";
import Step2 from "./components/Second";
import Step3 from "./components/Third";
import Step4 from "./components/Fourth";
import Footer from "../components/Footer";

const DigitalTransformation: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <Heading/>
     <Step1/>   
     <Step2/>
     <Step3/>
     <Step4/>
     <Footer/>
     

    
     
    </div>
  );
};

export default DigitalTransformation;
