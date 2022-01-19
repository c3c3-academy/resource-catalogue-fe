import "../styles/AppHeader.css";
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
  };

  const handleLogOut = () => {
    console.log(`You logged out`);
    localStorage.removeItem("savedUserId");
    navigate(`/`);
    setUserId(null);
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
    <header className="AppHeader">
      <div className="Header">
        <h1 className="welcomeText">Willy Wonka's Resource Factory</h1>
        <div className="LogIn">
          {userId === null ? (
            <div className="LoginSelector">
              <p className="loginText">Log in to view more options.</p>
              <select
                className="userDropDown form-select-sm"
                name="ChooseUser"
                id="ChooseUser"
                onChange={(e) => handleLogIn(e.target.value)}
              >
                <option value="">Select User</option>
                {userOptions}
              </select>
            </div>
          ) : (
            <div className="LoggedIn">
              {userList[0] && (
                <p className="loginText">
                  You are now logged in as
                  {" " + getusername(userList, savedUserId)}
                </p>
              )}

              <button className="LogOut" onClick={handleLogOut}>
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
      {userId !== null && <NavBar savedUserId={savedUserId} />}
    </header>
  );
}
