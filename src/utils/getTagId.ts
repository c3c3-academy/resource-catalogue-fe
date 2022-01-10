import { ITag } from "./Interfaces";
import { API_BASE } from "./APIFragments";
import axios from "axios";

interface Props {
  tagToCheck: string;
  tags: ITag[];
}

export async function getTagId(props: Props): Promise<number> {
  const filtered = props.tags.filter(
    (tag) => tag.category.toLowerCase() === props.tagToCheck.toLowerCase()
  );
  if (filtered.length === 0) {
    return axios
      .post(`${API_BASE}/tags`, {
        category: props.tagToCheck,
      })
      .then(function (response) {
        return response.data.tags.id;
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    return filtered[0].id;
  }
}
