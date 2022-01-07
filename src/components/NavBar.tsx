interface NavBarProps {
  savedUserId: string | null;
}

const baseURL = "https://c3c3-resource-catalogue.netlify.app/";

// const baseURL = "http://localhost:3000/";

export default function NavBar({ savedUserId }: NavBarProps): JSX.Element {
  return (
    <ul>
      <li>
        <a href={`${baseURL}${savedUserId}`}>Main Page</a>
      </li>
      <li>
        <a href={`${baseURL}${savedUserId}/add-resources`}>Add Resource</a>
      </li>
      <li>
        <a href={`${baseURL}${savedUserId}/to-study-list`}>Study List</a>
      </li>
    </ul>
  );
}
