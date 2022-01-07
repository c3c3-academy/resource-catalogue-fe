interface NavBarProps {
  savedUserId: string | null;
}

export default function NavBar({ savedUserId }: NavBarProps): JSX.Element {
  return (
    <ul>
      <li>
        <a href={`https://c3c3-resource-catalogue.netlify.app/${savedUserId}`}>Main Page</a>
      </li>
      <li>
        <a href={`https://c3c3-resource-catalogue.netlify.app//${savedUserId}/add-resources`}>
          Add Resource
        </a>
      </li>
      <li>
        <a href={`https://c3c3-resource-catalogue.netlify.app/${savedUserId}/to-study-list`}>
          Study List
        </a>
      </li>
    </ul>
  );
}
