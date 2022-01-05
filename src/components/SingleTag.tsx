import "../styles/SingleTag.css";

interface ISingleTag {
  id: number;
  tag: string;
}

export default function SingleTag(props: ISingleTag): JSX.Element {
  return <button>{props.tag}</button>;
}
