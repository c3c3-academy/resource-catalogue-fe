import NavBar from "./NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IUser {
  id: number;
  name: string;
  isFaculty: boolean;
}

interface AppHeaderProps {
  userId: string | null;
  setUserId: (userId: string | null) => void;
  userList: IUser[];
  // urluserid: string;
  savedUserId: string;
}

export default function AppHeader({
  userId,
  setUserId,
  userList,
  // urluserid,
  savedUserId,
}: AppHeaderProps): JSX.Element {
  const [rerender, setRerender] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogIn = (id: string | null) => {
    localStorage.setItem("savedUserId", `${id}`);
    navigate(`/${localStorage.getItem("savedUserId")}`);
    setUserId(id);
    setRerender(!rerender);
    console.log(`You are logged in as ${savedUserId}`);
    console.log(`The userId state is ${userId}`);
  };

  const handleLogOut = () => {
    console.log(`You logged out`);
    localStorage.removeItem("savedUserId");
    navigate(`/`);
    setUserId(null);
    setRerender(!rerender);

    console.log(`${savedUserId} has logged out`);
    console.log(`${userId} is now the userId state`);
  };
    
  useEffect(() => {
    axios
      .get("https://resource-catalogue-be.herokuapp.com/users")
      .then(function (response) {
        setUserList(response.data.users);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const userOptions = userList.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <h1>Welcome to Cohort 3 Resource Catalogue</h1>
      {savedUserId === null || userId === null ? (
        <div className="LoginSelector">
          <select
            name="ChooseUser"
            id="ChooseUser"
            onChange={(e) => handleLogIn(e.target.value)}
          >
            <option value="">Select User</option>
            {userOptions}
          </select>
        </div>
      ) : (
        <>
          {/* <p>
            You are now logged in as
            {" " +
              userList.filter((user) => user.id === parseInt(savedUserId))[0].name}
          </p> */}
          <button onClick={handleLogOut}>Log out</button>
        </>
      )}
      <NavBar savedUserId={userId} />
    </>
  );
}
