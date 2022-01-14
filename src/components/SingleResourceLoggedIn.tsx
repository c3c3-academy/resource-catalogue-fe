import "../styles/SingleResourceLoggedIn.css";
import { getDate } from "../utils/getDate";
import getusername from "../utils/getusername";
import { inStudyList } from "../utils/inStudyList";
import { IResource, IToStudy, IUser } from "../utils/Interfaces";
import { isRecommended } from "../utils/isRecommended";
import axios from "axios";
import { API_BASE } from "../utils/APIFragments";
import { useState } from "react";

interface SingleResourceProps {
  resource: IResource;
  userList: IUser[];
  userId: string | null;
  toStudyIds: IToStudy[];
}

export default function SingleResourceLoggedIn(
  props: SingleResourceProps
): JSX.Element {
  const handleDeleteToStudy = () => {
    console.log("deleted to study");
  };

  const handleAddToStudy = () => {
    axios
      .post(`${API_BASE}/tostudy`, {
        userid: props.userId,
        resourceid: props.resource.id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  // const buttonElement =

  return (
    <div className="SingleResourceLoggedIn">
      <h3>{props.resource.resourcename}</h3>
      <p>
        Added on {getDate(props.resource.creationdate)} by{" "}
        {getusername(props.userList, parseInt(props.resource.postedbyuserid))}
      </p>
      <p>Author: {props.resource.authorname} </p>
      <p>URL: {props.resource.url} </p>
      <p>Description: {props.resource.description} </p>
      <p>Tags:{props.resource.tags.join(", ")} </p>
      <p>Content Type: {props.resource.contenttype}</p>
      <p>Recommended Mark Stage: {props.resource.contentstage}</p>
      <p>Recommendation: {isRecommended(props.resource.isrecommended)} </p>
      <p>Reason: {props.resource.reason} </p>
      {inStudyList(props.resource.id, props.userId, props.toStudyIds) ? (
        <button className="DeleteToStudy" onClick={handleDeleteToStudy}>
          Remove from To Study List
        </button>
      ) : (
        <button className="AddToStudy" onClick={handleAddToStudy}>
          Add To Study List
        </button>
      )}
    </div>
  );
}
