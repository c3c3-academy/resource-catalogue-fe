import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { API_BASE } from "../utils/APIFragments";
import axios from "axios";

interface IUser {
  id: number;
  name: string;
  isFaculty: boolean;
}

export default function AppHeader(): JSX.Element {
  const [userList, setUserList] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/users`)
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
      <div className="LoginSelector">
        <select name="ChooseUser" id="ChooseUser">
          <option value="">Select User</option>
          {userOptions}
        </select>
      </div>
      <NavBar />
    </>
  );
}
