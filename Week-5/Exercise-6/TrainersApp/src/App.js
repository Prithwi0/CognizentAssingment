// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home";
import TrainersList from "./TrainersList";
import TrainersMock from "./TrainersMock";
import TrainerDetails from "./TrainerDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Trainers Management App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/trainers">Trainers List</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/trainers"
            element={<TrainersList trainers={TrainersMock} />}
          />
          <Route path="/trainers/:id" element={<TrainerDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
