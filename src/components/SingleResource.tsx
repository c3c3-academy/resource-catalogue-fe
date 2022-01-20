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
        </div>
      </div>
      <p className="author">By {props.resource.authorname} </p>
      <p className="addedBy">
        Added on {getDate(props.resource.creationdate)} by{" "}
        {getusername(props.userList, props.resource.postedbyuserid)}
      </p>
      <p>URL: {props.resource.url} </p>
      <p>Description: {props.resource.description} </p>
      <p>Tags:{props.resource.tags.join(", ")} </p>
      <p>Content Type: {props.resource.contenttype}</p>
      <p>Recommended Mark Stage: {props.resource.contentstage}</p>
      <p>Recommendation: {isRecommended(props.resource.isrecommended)} </p>
      <p>Reason: {props.resource.reason} </p>

      <CollapsibleCommentsLoggedOut
        userList={props.userList}
        resourceInteractions={interactionsByResourceLoggedOut}
      />
    </div>
  );
}
