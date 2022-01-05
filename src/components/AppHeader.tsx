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

export default function AppHeader(): JSX.Element {
  const [userList, setUserList] = useState<IUser[]>([]);
  const handleSelectUser = (id: string) => {
    //how do we set use id without using the state from App but the useParams from AddResources?
    setUserId(id);
  };

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
          <select
            name="ChooseUser"
            id="ChooseUser"
            onChange={(e) => handleSelectUser(e.target.value)}
          >
            <option value="">Select User</option>
            {userOptions}
          </select>
        </div>
      ) : (
        <>
          <p>
            You are now logged in as
            {" " +
              userList.filter((user) => user.id === parseInt(userId))[0].name}
          </p>
          <button onClick={() => setUserId("")}>Log out</button>
        </>
      )}
      <NavBar />
    </>
  );
}
