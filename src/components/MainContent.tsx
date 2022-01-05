import "../styles/MainContent.css";
import Resources from "./Resources";
import Tags from "./Tags";

export default function MainContent(): JSX.Element {
  const renderIfTrue = false;

  return (
    <div className="MainContent">
      <div className="left">
        <div className="SearchInput">
          {renderIfTrue && (
            <p>
              If this paragraph is on the page then renderifTrue must be true.
            </p>
          )}

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
