import "../styles/MainContent.css";
import Resources from "./Resources";
import Tags from "./Tags";
import { useState } from "react";

export default function MainContent(): JSX.Element {
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
        <Resources searchTerm={searchTerm} />
      </div>
      <div className="right">
        <Tags />
      </div>
    </div>
  );
}
