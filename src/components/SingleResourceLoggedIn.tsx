import "../styles/SingleResourceLoggedIn.css";
import { getDate } from "../utils/getDate";
import getusername from "../utils/getusername";
import { IResource, IUser } from "../utils/Interfaces";
import { isRecommended } from "../utils/isRecommended";
<<<<<<< HEAD
import axios from "axios";
import { API_BASE } from "../utils/APIFragments";
import { useEffect, useState } from "react";
=======
import RatingAndComment from "./RatingAndComment";
>>>>>>> main

interface SingleResourceProps {
  resource: IResource;
  userList: IUser[];
  userId: string | null;
<<<<<<< HEAD
  toStudyIds: IToStudy[];
  getToStudy: boolean;
  setGetToStudy: (input: boolean) => void;
=======
>>>>>>> main
}

export default function SingleResourceLoggedIn(
  props: SingleResourceProps
): JSX.Element {
<<<<<<< HEAD
  const [isInStudyList, setIsInStudyList] = useState<boolean>();
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  useEffect(() => {
    setIsInStudyList(
      inStudyList(props.resource.id, props.userId, props.toStudyIds)
    );
  }, [props.resource.id, props.userId, props.toStudyIds, buttonClicked]);

  const handleDeleteToStudy = async () => {
    await axios({
      method: "delete",
      url: `${API_BASE}/tostudy`,
      data: { userid: props.userId, resourceid: props.resource.id },
    })
      .then((response) => {
        console.log(response);
        setButtonClicked(!buttonClicked);
        props.setGetToStudy(!props.getToStudy);
      })
      .catch((error) => console.log(error));
  };

  const handleAddToStudy = async () => {
    await axios
      .post(`${API_BASE}/tostudy`, {
        userid: props.userId,
        resourceid: props.resource.id,
      })
      .then((response) => {
        console.log(response);
        setButtonClicked(!buttonClicked);
        props.setGetToStudy(!props.getToStudy);
      })
      .catch((error) => console.log(error));
  };
  const buttonElement = isInStudyList ? (
    <button className="DeleteToStudy" onClick={handleDeleteToStudy}>
      Remove from To Study List
    </button>
  ) : (
    <button className="AddToStudy" onClick={handleAddToStudy}>
      Add To Study List
    </button>
  );

=======
>>>>>>> main
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
<<<<<<< HEAD
      {buttonElement}
=======
      <RatingAndComment resourceId={props.resource.id} userId={props.userId} />
>>>>>>> main
    </div>
  );
}
