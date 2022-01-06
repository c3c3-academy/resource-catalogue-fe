import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import ToStudy from "./routes/ToStudy";
import AddResources from "./routes/AddResources";
import { useEffect, useState } from "react";
import { IUser } from "./components/AppHeader";
import axios from "axios";


function App(): JSX.Element {
  const [userId, setUserId] = useState<string>("");
  const [userList, setUserList] = useState<IUser[]>([]);
  const { urluserid } = useParams();

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

  const retrieveSavedUser = () => {
    return localStorage.getItem("savedUserId");
  }

  const savedUserId = retrieveSavedUser()

  useEffect(() => {setUserId(savedUserId ? savedUserId : "")
   console.log("useEffect was called")}, [urluserid]);



  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppHeader userId={userId} setUserId={setUserId} userList={userList} urluserid={urluserid ? urluserid : ""} savedUserId={savedUserId ? savedUserId : ""}/>
                <MainContent />
              </>
            }
          />
          <Route
            path="/:urluserid"
            element={
              <>
                <AppHeader userId={userId} setUserId={setUserId} userList={userList} urluserid={urluserid ? urluserid : ""} savedUserId={savedUserId ? savedUserId : ""}/>
                <MainContent />
              </>
            }
          />
          <Route
            path="/:urluserid/add-resources"
            element={
              <>
                <AppHeader userId={userId} setUserId={setUserId} userList={userList} urluserid={urluserid ? urluserid : ""} savedUserId={savedUserId ? savedUserId : ""}/>
                <AddResources />
              </>
            }
          />
          <Route
            path="/:urluserid/to-study-list"
            element={
              <>
                <AppHeader userId={userId} setUserId={setUserId} userList={userList} urluserid={urluserid ? urluserid : ""} savedUserId={savedUserId ? savedUserId : ""}/>
                <ToStudy />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
