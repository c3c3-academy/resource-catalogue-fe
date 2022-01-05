import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
const ToStudy = () => {
  const history = useNavigate();

  return (
    <div>
      <NavBar />
      <h1>To Study</h1>;
    </div>
  );
};

export default ToStudy;
