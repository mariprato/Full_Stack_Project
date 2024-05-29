import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import PetInfo from "./pages/PetInfo";
import PetLostForm from "./pages/PetLostForm";
import LostPets from "./pages/LostPets";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lostPets" element={<LostPets />} />
          <Route path="/petInfo/:id" element={<PetInfo />} />
          <Route path="/submissionForm" element={<PetLostForm />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;