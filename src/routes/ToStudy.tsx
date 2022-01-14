import React, { useEffect } from "react";
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
  toStudyIds: IToStudy[];
  setToStudyIds: (input: IToStudy[]) => void;
  getToStudy: boolean;
  setGetToStudy: (input: boolean) => void;
}

const ToStudy = ({
  savedUserId,
  resources,
  userList,
  toStudyIds,
  setToStudyIds,
  getToStudy,
  setGetToStudy,
}: ToStudyProps): JSX.Element => {
  useNavigate();

  useEffect(() => {
    axios
      .get(`${API_BASE}/tostudy/${savedUserId}`)
      .then((response) => {
        setToStudyIds(response.data.tostudylist);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [savedUserId, setToStudyIds]);

  const toStudyResources = getStudyResources(toStudyIds, resources).map(
    (resource) => (
      <SingleResourceLoggedIn
        key={resource.id}
        resource={resource}
        userList={userList}
        userId={savedUserId}
        toStudyIds={toStudyIds}
        getToStudy={getToStudy}
        setGetToStudy={setGetToStudy}
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
