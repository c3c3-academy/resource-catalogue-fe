// import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ToStudy = (): JSX.Element => {
  const { id } = useParams();

  /* eslint-disable  @typescript-eslint/no-unused-vars */
  const history = useNavigate();
  /* eslint-enable  @typescript-eslint/no-unused-vars */

  return (
    <div>
      <h1>To Study</h1>;
      <p>This is the list to study of user {id}</p>
    </div>
  );
};

export default ToStudy;
