import SingleTag from "./SingleTag";

export default function Tags(): JSX.Element {
  return (
    <div className="Tags">
      <h2>Tags</h2>
      <SingleTag id={1} tag={"React"} />
      <SingleTag id={2} tag={"HTML"} />
      <SingleTag id={3} tag={"CSS"} />
      <SingleTag id={4} tag={"JavaScript"} />
    </div>
  );
}
