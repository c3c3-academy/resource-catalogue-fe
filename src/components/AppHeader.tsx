import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

interface IUser {
  id: number;
  name: string;
  isFaculty: boolean;
}

interface AppHeaderProps {
  userId: string;
  setUserId: (userId: string) => void;
}

export default function AppHeader({
  userId,
  setUserId,
}: AppHeaderProps): JSX.Element {
  const [userList, setUserList] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get("https://resource-catalogue-be.herokuapp.com/users")
      .then(function (response) {
        setUserList(response.data);
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
      {userId === "" ? (
        <div className="LoginSelector">
          <select name="ChooseUser" id="ChooseUser">
            <option value="">Select User</option>
            {userOptions}
          </select>
        </div>
      ) : (
        <button>Log out</button>
      )}
      <NavBar />
    </>
  );
}
