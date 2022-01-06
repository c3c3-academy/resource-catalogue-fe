import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

export interface IUser {
  id: number;
  name: string;
  isFaculty: boolean;
}

interface AppHeaderProps {
  userId: string;
  setUserId: (userId: string) => void;
  userList: IUser[];
  urluserid: string;
  savedUserId: string;
}

export default function AppHeader({
  userId,
  setUserId,
  userList,
  urluserid,
  savedUserId,
}: AppHeaderProps): JSX.Element {
  const handleSelectUser = (id: string) => {
    setUserId(id);
  };

  const handleLogIn = () => {
    console.log(`You are logged in as ${userId}`);
    localStorage.setItem("savedUserId", `${userId}`);
  };

  const handleLogOut = () => {
    console.log(`You logged out`);
    localStorage.removeItem("savedUserId")
    console.log(localStorage.getItem("savedUserId"))
    };

  const userOptions = userList.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));
  return (
    <>
      <h1>Welcome to Cohort 3 Resource Catalogue</h1>
      {savedUserId === null ? (
        <div className="LoginSelector">
          <select
            name="ChooseUser"
            id="ChooseUser"
            onChange={(e) => handleSelectUser(e.target.value)}
          >
            <option value="">Select User</option>
            {userOptions}
          </select>
          <button onClick={handleLogIn}>Log in</button>
        </div>
      ) : (
        <>
          <p>
            You are now logged in as
            {/* {" " +
              userList.filter((user) => user.id === parseInt(userId))[0].name} */}
          </p>
          <button onClick={handleLogOut}>Log out</button>
        </>
      )}
      <NavBar urluserid={userId} />
    </>
  );
}
