interface NavBarProps {
  urluserid: string;
}

export default function NavBar({ urluserid }: NavBarProps): JSX.Element {
  return (
    <ul>
      <li>
        <a href={`http://localhost:3000/${urluserid}`}>Main Page</a>
      </li>
      <li>
        <a href={`http://localhost:3000/${urluserid}/add-resources`}>
          Add Resource
        </a>
      </li>
      <li>
        <a href={`http://localhost:3000/${urluserid}/to-study-list`}>
          Study List
        </a>
      </li>
    </ul>
  );
}
