import "../styles/MainContent.css";
import Resources from "./Resources";
import Tags from "./Tags";

export default function MainContent(): JSX.Element {
  return (
    <div className="MainContent">
      <div className="left">
        <div className="SearchInput">
          <input
            type="text"
            placeholder="Search resources"
            name="search"
            autoComplete="off"
          />
        </div>
        <Resources />
      </div>
      <div className="right">
        <Tags />
      </div>
    </div>
  );
}
