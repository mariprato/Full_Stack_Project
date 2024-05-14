import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import PetInfo from "./components/pages/PetInfo";
import SubmissionForm from "./components/pages/SubmissionForm";
import LostPets from "./components/pages/LostPets";
import Header from "./components/layout/header";

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
      <Header />
    </div>
  );
}

export default App;
