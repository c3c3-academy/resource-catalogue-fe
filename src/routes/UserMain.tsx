// import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Resources from "../components/Resources";

interface UserMainProps {
  savedUserId: string | null;
}

const UserMain = ({ savedUserId }: UserMainProps): JSX.Element => {
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  const history = useNavigate();
  /* eslint-enable  @typescript-eslint/no-unused-vars */

  return (
    <div>
      <p>{`This is the main page of user ${savedUserId}`}</p>
      <Resources />
    </div>
  );
};

export default UserMain;
