import React, { useState, useEffect } from "react";
import SingleResourceLoggedIn from "../components/SingleResourceLoggedIn";
import { useNavigate } from "react-router-dom";
import { IResource, IToStudy } from "../utils/Interfaces";
import axios from "axios";
import { API_BASE } from "../utils/APIFragments";

interface ToStudyProps {
  savedUserId: string | null;
  resources: IResource[];
}

const ToStudy = ({ savedUserId, resources }: ToStudyProps): JSX.Element => {
  useNavigate();
  const [toStudyIds, setToStudyIds] = useState<IToStudy[]>([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/tostudy/${savedUserId}`)
      .then((response) => setToStudyIds(response.data.tostudylist))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>To Study</h1>
      <p>{`This is the list to study of user ${savedUserId}`}</p>
    </div>
  );
};

export default ToStudy;
