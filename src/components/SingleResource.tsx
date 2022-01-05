import "../styles/SingleResource.css";

export default function SingleResource(): JSX.Element {
  return (
    <div className="SingleResource">
      <div className="ResourceHeader">
        <h3>Resource Title</h3>
        <p className="DateAuthor">Added on By </p>
      </div>
      <p>Author: </p>
      <p>URL: </p>
      <p>Description: </p>
      <p>Tags: </p>
      <p>Content Type: </p>
      <p>Recommended Mark Stage: </p>
    </div>
  );
}
