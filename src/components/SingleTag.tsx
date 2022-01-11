import "../styles/SingleTag.css";
import { ITag } from "../utils/Interfaces";
import { useState } from "react";

interface singleTagProps {
  tags: ITag[];
  setSearchTag: (searchTag: string | null) => void;
  searchTag: string;
}
// export default function SingleTag(props: singleTagProps) : JSX.Element {

//   const handleTagFilter = () => {
//     props.setSearchTag(props.category);
//   };

//   console.log(props.searchTag);
//   return <button onClick={handleTagFilter}>{props.category}</button>;
// }
