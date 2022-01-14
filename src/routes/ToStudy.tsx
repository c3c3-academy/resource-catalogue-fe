import React, { useState, useEffect } from "react";
import SingleResourceLoggedIn from "../components/SingleResourceLoggedIn";
import { useNavigate } from "react-router-dom";
import { IResource, IToStudy, IUser } from "../utils/Interfaces";
import axios from "axios";
import { API_BASE } from "../utils/APIFragments";
import { getStudyResources } from "../utils/getStudyResources";

interface ToStudyProps {
  savedUserId: string | null;
  resources: IResource[];
  userList: IUser[];
<<<<<<< HEAD
  toStudyIds: IToStudy[];
  getToStudy: boolean;
  setGetToStudy: (input: boolean) => void;
=======
>>>>>>> main
}

const ToStudy = ({
  savedUserId,
  resources,
  userList,
<<<<<<< HEAD
  toStudyIds,
  getToStudy,
  setGetToStudy,
=======
>>>>>>> main
}: ToStudyProps): JSX.Element => {
  useNavigate();
  const [toStudyIds, setToStudyIds] = useState<IToStudy[]>([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/tostudy/${savedUserId}`)
      .then((response) => {
        console.log(response.data.tostudylist);
        setToStudyIds(response.data.tostudylist);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [savedUserId]);

  const toStudyResources = getStudyResources(toStudyIds, resources).map(
    (resource) => (
      <SingleResourceLoggedIn
        key={resource.id}
        resource={resource}
        userList={userList}
        userId={savedUserId}
<<<<<<< HEAD
        toStudyIds={toStudyIds}
        getToStudy={getToStudy}
        setGetToStudy={setGetToStudy}
=======
>>>>>>> main
      />
    )
  );

  return (
    <div>
      <h1>To Study</h1>
      <p>{`This is the list to study of user ${savedUserId}`}</p>
      {toStudyResources}
    </div>
  );
};

export default ToStudy;
