import "../styles/SingleResourceLoggedIn.css";
import { getDate } from "../utils/getDate";
import getusername from "../utils/getusername";
import { inStudyList } from "../utils/inStudyList";
import { IResource, IToStudy, IUser } from "../utils/Interfaces";
import { isRecommended } from "../utils/isRecommended";

interface SingleResourceProps {
  resource: IResource;
  userList: IUser[];
  userId: string | null;
  toStudyIds: IToStudy[];
}

export default function SingleResourceLoggedIn(
  props: SingleResourceProps
): JSX.Element {
  const buttonElement = inStudyList(
    props.resource.id,
    props.userId,
    props.toStudyIds
  );

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
    </div>
  );
}
