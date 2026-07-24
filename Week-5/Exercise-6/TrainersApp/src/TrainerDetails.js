// src/TrainerDetails.js
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Trainers from "./TrainersMock";

function TrainerDetails() {
  const { id } = useParams();
  const trainer = Trainers.find((item) => item.trainerId === parseInt(id, 10));

  if (!trainer) {
    return <Navigate to="/trainers" replace />;
  }

  return (
    <div>
      <h2>Trainer Details</h2>
      <p>
        <strong>ID:</strong> {trainer.trainerId}
      </p>
      <p>
        <strong>Name:</strong> {trainer.name}
      </p>
      <p>
        <strong>Email:</strong> {trainer.email}
      </p>
      <p>
        <strong>Phone:</strong> {trainer.phone}
      </p>
      <p>
        <strong>Technology:</strong> {trainer.technology}
      </p>
      <p>
        <strong>Skills:</strong> {trainer.skills}
      </p>
    </div>
  );
}

export default TrainerDetails;
