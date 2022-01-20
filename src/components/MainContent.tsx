import "../styles/MainContent.css";
import Resources from "./Resources";
import Tags from "./Tags";
import { useState } from "react";
import { IResource, ITag, IToStudy, IUser } from "../utils/Interfaces";

interface MainContentProps {
  userList: IUser[];
  userId: string | null;
  resources: IResource[];
  toStudyIds: IToStudy[];
  getToStudy: boolean;
  setGetToStudy: (input: boolean) => void;
}

export default function MainContent({
  userList,
  userId,
  resources,
  toStudyIds,
  getToStudy,
  setGetToStudy,
}: MainContentProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<ITag[]>([]);
  const [filteredNumber, setFilteredNumber] = useState<number | null>(null);

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
          {filteredNumber === null ? (
            <p className="FoundResource">Loading...</p>
          ) : filteredNumber === 0 ? (
            <p className="FoundResource">No resources found.</p>
          ) : (
            <p className="FoundResource">{filteredNumber} resources found.</p>
          )}
        </div>
        <Resources
          userList={userList}
          searchTerm={searchTerm}
          selectedTags={selectedTags}
          userId={userId}
          resources={resources}
          toStudyIds={toStudyIds}
          getToStudy={getToStudy}
          setGetToStudy={setGetToStudy}
          setFilteredNumber={setFilteredNumber}
        />
      </div>
      <div className="right">
        <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>
    </div>
  );
}
