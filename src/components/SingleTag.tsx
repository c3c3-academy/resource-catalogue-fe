import "../styles/SingleTag.css";
import { ITag } from "../utils/Interfaces";
import { useState } from "react";

export default function SingleTag(props: ITag): JSX.Element {
  const [searchTag, setSearchTag] = useState<string>("");

  const handleTagFilter = () => {
    setSearchTag(props.category);
  };

  console.log(searchTag);
  return <button onClick={handleTagFilter}>{props.category}</button>;
}
