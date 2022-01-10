import NavBar from "./NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../utils/APIFragments";
import axios from "axios";
import getusername from "../utils/getusername";
import { IUser } from "../utils/Interfaces";

interface AppHeaderProps {
  userId: string | null;
  setUserId: (userId: string | null) => void;
  setUserList: (userList: IUser[]) => void;
  userList: IUser[];
  savedUserId: string;
}

export default function AppHeader({
  userId,
  setUserId,
  setUserList,
  userList,
  savedUserId,
}: AppHeaderProps): JSX.Element {
  const navigate = useNavigate();

  const handleLogIn = (id: string | null) => {
    localStorage.setItem("savedUserId", `${id}`);
    setUserId(id);
    // setRerender(!rerender);
    console.log(`You are logged in as ${savedUserId}`);
    console.log(`The userId state is ${userId}`);
  };

  const handleLogOut = () => {
    console.log(`You logged out`);
    localStorage.removeItem("savedUserId");
    navigate(`/`);
    setUserId(null);
    // setRerender(!rerender);

    console.log(`${savedUserId} has logged out`);
    console.log(`${userId} is now the userId state`);
  };

  useEffect(() => {
    axios
      .get(`${API_BASE}/users`)
      .then(function (response) {
        setUserList(response.data.users);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setUserList]);

  const userOptions = userList.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <h1>Welcome to Cohort 3 Resource Catalogue</h1>
      {userId === null ? (
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
          {userList[0] && (
            <p>
              You are now logged in as
              {" " + getusername(userList, parseInt(savedUserId))}
            </p>
          )}

          <button onClick={handleLogOut}>Log out</button>
        </>
      )}
      {userId === null ? (
        <p>Log in to view more options.</p>
      ) : (
        <NavBar savedUserId={savedUserId} />
      )}
    </>
  );
}
