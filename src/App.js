import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import PetInfo from "./components/pages/PetInfo";
import SubmissionForm from "./components/pages/SubmissionForm";
import Confirmation from "./components/pages/Confirmation";
import LostPets from "./components/pages/LostPets";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petInfo" element={<PetInfo />} />
          <Route path="/lostPets" element={<LostPets />} />
          <Route path="/submissionForm" element={<SubmissionForm />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
