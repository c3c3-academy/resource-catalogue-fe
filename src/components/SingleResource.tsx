import "../styles/SingleResource.css";
import { getDate } from "../utils/getDate";
import getusername from "../utils/getusername";
import { IResource, IUser } from "../utils/Interfaces";
import { isRecommended } from "../utils/isRecommended";

interface SingleResourceProps {
  resource: IResource;
  userList: IUser[];
}

export default function SingleResource(
  props: SingleResourceProps
): JSX.Element {
  return (
    <div className="SingleResource">
      <h3>
        <a href={props.resource.url} target="_blank" rel="noreferrer">
          {props.resource.resourcename}
        </a>
      </h3>
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
    </div>
  );
}
