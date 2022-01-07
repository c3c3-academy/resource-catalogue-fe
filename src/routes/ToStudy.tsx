// import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ToStudyProps {
  savedUserId: string | null;
}

const ToStudy = ({ savedUserId }: ToStudyProps): JSX.Element => {
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  const history = useNavigate();
  /* eslint-enable  @typescript-eslint/no-unused-vars */

  return (
    <div>
      <h1>To Study</h1>
      <p>{`This is the list to study of user ${savedUserId}`}</p>
    </div>
  );
};

export default ToStudy;
