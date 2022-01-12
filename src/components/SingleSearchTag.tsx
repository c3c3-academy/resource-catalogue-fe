import "../styles/SingleSearchTag.css";
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
  const removeSearchTag = () => {
    setNotSelectedTags([...notSelectedTags, tag]);
    setSelectedTags(
      selectedTags.filter((tagElement) => tagElement.id !== tag.id)
    );
  };

  return (
    <button className={"selectedTag"} onClick={removeSearchTag}>
      {tag.category}
    </button>
  );
}
