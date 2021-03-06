import "../styles/SingleTag.css";
import { ITag } from "../utils/Interfaces";

interface SingleTagProps {
  tag: ITag;
  selectedTags: ITag[];
  setSelectedTags: (selectedTags: ITag[]) => void;
  notSelectedTags: ITag[];
  setNotSelectedTags: (notSelectedTags: ITag[]) => void;
}

export default function SingleTag({
  tag,
  selectedTags,
  setSelectedTags,
  notSelectedTags,
  setNotSelectedTags,
}: SingleTagProps): JSX.Element {
  const addSearchTag = () => {
    setSelectedTags([...selectedTags, tag]);
    setNotSelectedTags(
      notSelectedTags.filter((tagElement) => tagElement.id !== tag.id)
    );
  };

  return (
    <button className="notSelectedTag" onClick={addSearchTag}>
      {tag.category}
    </button>
  );
}
