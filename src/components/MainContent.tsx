import "../styles/MainContent.css";
import Resources from "./Resources";
import Tags from "./Tags";
import { useState } from "react";
import { ITag, IUser } from "../utils/Interfaces";

interface MainContentProps {
  userList: IUser[];
}

export default function MainContent({
  userList,
}: MainContentProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<ITag[]>([]);

  return (
    <div className="MainContent">
      <div className="left">
        <div className="SearchInput">
          <input
            type="text"
            placeholder="Search resources"
            name="search"
            autoComplete="off"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <Resources
          userList={userList}
          searchTerm={searchTerm}
          selectedTags={selectedTags}
        />
      </div>
      <div className="right">
        <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>
    </div>
  );
}
