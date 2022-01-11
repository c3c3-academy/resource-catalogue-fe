import "../styles/SingleResource.css";
import { IResource } from "../utils/Interfaces";

interface SingleResourceProps {
  resource: IResource;
}

export default function SingleResource(
  props: SingleResourceProps
): JSX.Element {
  return (
    <div className="SingleResource">
      <h3>{props.resource.resourcename}</h3>
      <p>Added on By {props.resource.postedbyuserid}</p>
      <p>Author: {props.resource.authorname} </p>
      <p>URL: {props.resource.url} </p>
      <p>Description: {props.resource.description} </p>
      <p>Tags:{props.resource.tags.join(", ")} </p>
      <p>Content Type: {props.resource.contenttype}</p>
      <p>Recommended Mark Stage: {props.resource.contentstage}</p>
      <p>is Recommended?:{props.resource.isrecommended} </p>
      <p>Reason:{props.resource.reason} </p>
      <p>Creation date:{props.resource.creationdate} </p>
    </div>
  );
}
