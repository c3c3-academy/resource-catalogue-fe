// import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const ToStudy = (): JSX.Element => {
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  const history = useNavigate();
  /* eslint-enable  @typescript-eslint/no-unused-vars */

  return (
    <div>
      <NavBar />
      <h1>To Study</h1>;
    </div>
  );
};

export default ToStudy;
