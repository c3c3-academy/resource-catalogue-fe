import { ITag } from "./Interfaces";
import { API_BASE } from "./APIFragments";
import axios from "axios";

interface Props {
  tagToCheck: string;
  tags: ITag[];
}

export function getTagId(props: Props): number {
  let tagId = -1;
  const filtered = props.tags.filter(
    (tag) => tag.category.toLowerCase === props.tagToCheck.toLowerCase
  );
  if (filtered.length === 0) {
    axios
      .post(`${API_BASE}/tags`, {
        category: props.tagToCheck,
      })
      .then(function (response) {
        tagId = response.data.id;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    tagId = filtered[0].id;
  }
  return tagId;
}
