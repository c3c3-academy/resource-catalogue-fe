import "../styles/Tags.css";
import SingleTag from "./SingleTag";
import { useState, useEffect } from "react";
import axios from "axios";
import { ITag } from "../utils/Interfaces";
import SingleSearchTag from "./SingleSearchTag";

interface TagsProps {
  selectedTags: ITag[];
  setSelectedTags: (selectedTags: ITag[]) => void;
}

export default function Tags({
  selectedTags,
  setSelectedTags,
}: TagsProps): JSX.Element {
  const [notSelectedTags, setNotSelectedTags] = useState<ITag[]>([]);
  const baseURL = "https://resource-catalogue-be.herokuapp.com/";

  useEffect(() => {
    axios
      .get(baseURL + "tags")
      .then(function (response) {
        setNotSelectedTags(response.data.tags);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="Tags">
      <h2>Tags</h2>
      {selectedTags.map((tag) => (
        <SingleSearchTag
          tag={tag}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          notSelectedTags={notSelectedTags}
          setNotSelectedTags={setNotSelectedTags}
          key={tag.id}
        />
      ))}
      {notSelectedTags.map((tag) => (
        <SingleTag
          tag={tag}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          notSelectedTags={notSelectedTags}
          setNotSelectedTags={setNotSelectedTags}
          key={tag.id}
        />
      ))}
    </div>
  );
}
