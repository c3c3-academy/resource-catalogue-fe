import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/SingleResource.css";
import { API_BASE } from "../utils/APIFragments";
import { getDate } from "../utils/getDate";
import getusername from "../utils/getusername";
import { IInteraction, IResource, IUser } from "../utils/Interfaces";
import { isRecommended } from "../utils/isRecommended";
import CollapsibleCommentsLoggedOut from "./CollapsibleCommentsLoggedOut";

interface SingleResourceProps {
  resource: IResource;
  userList: IUser[];
}

export default function SingleResource(
  props: SingleResourceProps
): JSX.Element {
  const [interactionsByResourceLoggedOut, setInteractionsByResourceLoggedOut] =
    useState<IInteraction[]>([]);

  // useEffect to get interactions for a resource
  useEffect(() => {
    axios
      .get(`${API_BASE}/interactions/${props.resource.id}`)
      .then((response) => {
        setInteractionsByResourceLoggedOut(response.data.interactions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.resource.id]);

  const tagElements = props.resource.tags.map((tag, index) => (
    <span key={index} className="ResourceTag">
      {tag}
    </span>
  ));
  function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="SingleResource">
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
          <p className="emojiRecommend">
            {isRecommended(props.resource.isrecommended)}{" "}
          </p>
        </div>
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
          <p>{props.resource.contentstage}</p>
        </div>
      </div>
      <CollapsibleCommentsLoggedOut
        userList={props.userList}
        resourceInteractions={interactionsByResourceLoggedOut}
      />
    </div>
  );
}
