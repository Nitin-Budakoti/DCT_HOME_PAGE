// app/digitalTransformation/page.tsx
import React from "react";
import NavBar from "../components/NAVBAR";
import Heading from "./components/heading";
import BusinessRedefine from "./components/BusinessRedefine";

const DigitalTransformation: React.FC = () => {
  return (
    <div>
       <NavBar/>
       <Heading/>
       <BusinessRedefine/>
    </div>
  );
};

export default DigitalTransformation;
