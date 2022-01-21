import "../styles/SingleResourceLoggedIn.css";
import "../styles/StarRating.css";
import { getDate } from "../utils/getDate";
import getusername from "../utils/getusername";
import { IInteraction, IResource, IToStudy, IUser } from "../utils/Interfaces";
import { isRecommended } from "../utils/isRecommended";
import axios from "axios";
import { API_BASE } from "../utils/APIFragments";
import { useEffect, useState } from "react";
import RatingAndComment from "./RatingAndComment";
import { inStudyList } from "../utils/inStudyList";
import CollapsibleComments from "./CollapsibleComments";

interface SingleResourceProps {
  resource: IResource;
  userList: IUser[];
  userId: string | null;
  toStudyIds: IToStudy[];
  getToStudy: boolean;
  setGetToStudy: (input: boolean) => void;
}

export default function SingleResourceLoggedIn(
  props: SingleResourceProps
): JSX.Element {
  const [isInStudyList, setIsInStudyList] = useState<boolean>();
  const [studyButtonClicked, setStudyButtonClicked] = useState<boolean>(false);
  const [interactionsByUser, setInteractionsByUser] = useState<IInteraction[]>(
    []
  );
  const [interactionsByResource, setInteractionsByResource] = useState<
    IInteraction[]
  >([]);
  const [getUpdatedInteractions, setGetUpdatedInteractions] =
    useState<boolean>(false);

  // useEffect to get interactions by a user
  useEffect(() => {
    if (props.userId !== null) {
      axios
        .get(`${API_BASE}/interactionsbyuser/${props.userId}`)
        .then((response) => {
          setInteractionsByUser(response.data.interactions);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [props.userId, getUpdatedInteractions]);

  // useEffect to get interactions for a resource
  useEffect(() => {
    axios
      .get(`${API_BASE}/interactions/${props.resource.id}`)
      .then((response) => {
        setInteractionsByResource(response.data.interactions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.resource.id, getUpdatedInteractions]);

  // useEffect checks if a resource is in the users study list
  useEffect(() => {
    setIsInStudyList(
      inStudyList(props.resource.id, props.userId, props.toStudyIds)
    );
  }, [props.resource.id, props.userId, props.toStudyIds, studyButtonClicked]);

  const handleDeleteToStudy = async () => {
    await axios({
      method: "delete",
      url: `${API_BASE}/tostudy`,
      data: { userid: props.userId, resourceid: props.resource.id },
    })
      .then((response) => {
        setStudyButtonClicked(!studyButtonClicked);
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
        setStudyButtonClicked(!studyButtonClicked);
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

  const tagElements = props.resource.tags.map((tag, index) => (
    <span key={index} className="ResourceTag">
      {tag}
    </span>
  ));

  function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="SingleResourceLoggedIn">
      <div className="ResourceHeader">
        <div className="ResourceNameAndRating">
          <h3 className="ResourceName">
            <a href={props.resource.url} target="_blank" rel="noreferrer">
              {props.resource.resourcename}
            </a>
          </h3>
          {props.resource.avgrating !== null ? (
            <p className="rating">
              {props.resource.avgrating + " "}
              <span>&#127851;</span>
            </p>
          ) : (
            <p className="rating">
              -- <span>&#127851;</span>
            </p>
          )}
        </div>
        {buttonElement}
      </div>
      <p className="author">
        {capitalizeFirstLetter(props.resource.contenttype)} by{" "}
        {props.resource.authorname}{" "}
      </p>
      <div className="ResourceBody">
        <div className="LeftSide">
          <p className="description">{props.resource.description} </p>
          <p className="addedBy">
            <span className="emojiRecommend">
              {isRecommended(props.resource.isrecommended)}
            </span>
            "{props.resource.reason}" -{" "}
            {getusername(props.userList, props.resource.postedbyuserid)} (
            {getDate(props.resource.creationdate)})
          </p>
        </div>
        <div className="RightSide">
          <div className="ResourceTags">{tagElements}</div>
          {props.resource.contentstage === "Other"
            ? ""
            : props.resource.contentstage}
        </div>
      </div>
      <RatingAndComment
        resourceId={props.resource.id}
        userId={props.userId}
        interactions={interactionsByUser}
        setGetUpdatedInteractions={setGetUpdatedInteractions}
        getUpdatedInteractions={getUpdatedInteractions}
      />
      <CollapsibleComments
        userId={props.userId}
        userList={props.userList}
        resourceId={props.resource.id}
        resourceInteractions={interactionsByResource}
        setGetUpdatedInteractions={setGetUpdatedInteractions}
        getUpdatedInteractions={getUpdatedInteractions}
      />
    </div>
  );
}
