import "../styles/NavBar.css";
interface NavBarProps {
  savedUserId: string | null;
}

const baseURL = "https://c3c3-resource-catalogue.netlify.app/";

// const baseURL = "http://localhost:3000/";

export default function NavBar({ savedUserId }: NavBarProps): JSX.Element {
  return (
    <ul className="NavBar">
      <li>
        <a href={`${baseURL}`}>Resource Chocopedia</a>
      </li>
      <li>
        <a href={`${baseURL}add-resources`}>Submit a New Resource Flavour</a>
      </li>
      <li>
        <a href={`${baseURL}to-study-list`}>My Box of Resources</a>
      </li>
    </ul>
  );
}
