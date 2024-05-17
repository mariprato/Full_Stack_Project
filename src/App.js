import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import PetInfo from "./components/pages/PetInfo";
import SubmissionForm from "./components/pages/SubmissionForm";
import LostPets from "./components/pages/LostPets";
import AboutUs from "./components/pages/AboutUs";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lostPets" element={<LostPets />} />
          <Route path="/petInfo" element={<PetInfo />} />
          <Route path="/submissionForm" element={<SubmissionForm />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;