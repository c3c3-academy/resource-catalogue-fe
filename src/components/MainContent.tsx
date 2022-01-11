import "../styles/MainContent.css";
import Resources from "./Resources";
import Tags from "./Tags";
import { useState } from "react";
import { IUser } from "../utils/Interfaces";

interface MainContentProps {
  userList: IUser[];
  searchTag: string;
}

export default function MainContent({
  userList,
  searchTag,
}: MainContentProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");

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
          searchTag={searchTag}
        />
      </div>
      <div className="right">
        <Tags />
      </div>
    </div>
  );
}
