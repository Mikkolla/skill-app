
import './App.css';

import { useEffect } from "react";

import { Welcome } from "./sections/Welcome";

import { Classroom } from "./sections/Classroom";
import { Skilline } from "./sections/Skilline";
import { Features } from "./sections/Features";
import { Say } from "./sections/Say";
import { News } from "./sections/News";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    
  }, []);

  return (
    <>
      <Welcome />

      <Skilline />
      
      <Classroom />
      <Features />
      <Say />
      <News />
      <Footer />
    </>
  );
}

export default App;
