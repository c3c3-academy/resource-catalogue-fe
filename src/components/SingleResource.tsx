import "../styles/SingleResource.css";
import { getDate } from "../utils/getDate";
import getUserName from "../utils/getUserName";
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
      <h3>{props.resource.resourcename}</h3>
      <p>
        Added on {getDate(props.resource.creationdate)} by{" "}
        {getUserName(props.userList, props.resource.postedbyuserid)}
      </p>
      <p>Author: {props.resource.authorname} </p>
      <p>URL: {props.resource.url} </p>
      <p>Description: {props.resource.description} </p>
      <p>Tags: </p>
      <p>Content Type: {props.resource.contenttype}</p>
      <p>Recommended Mark Stage: {props.resource.contentstage}</p>
      <p>Recommendation: {isRecommended(props.resource.isrecommended)} </p>
      <p>Reason: {props.resource.reason} </p>
    </div>
  );
}
