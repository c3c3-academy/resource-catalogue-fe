interface NavBarProps {
  savedUserId: string | null;
}

export default function NavBar({ savedUserId }: NavBarProps): JSX.Element {
  return (
    <ul>
      <li>
        <a href={`http://localhost:3000/${savedUserId}`}>Main Page</a>
      </li>
      <li>
        <a href={`http://localhost:3000/${savedUserId}/add-resources`}>
          Add Resource
        </a>
      </li>
      <li>
        <a href={`http://localhost:3000/${savedUserId}/to-study-list`}>
          Study List
        </a>
      </li>
    </ul>
  );
}
