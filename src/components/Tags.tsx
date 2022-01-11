import "../styles/Tags.css";
import SingleTag from "./SingleTag";
import { useState, useEffect } from "react";
import axios from "axios";
import { ITag } from "../utils/Interfaces";

export default function Tags(): JSX.Element {
  const [tags, setTags] = useState<ITag[]>([]);
  const baseURL = "https://resource-catalogue-be.herokuapp.com/";

  useEffect(() => {
    axios
      .get(baseURL + "tags")
      .then(function (response) {
        setTags(response.data.tags);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="Tags">
      <h2>Tags</h2>
      {tags.map((tag) => (
        <SingleTag id={tag.id} category={tag.category} key={tag.id} />
      ))}
    </div>
  );
}
