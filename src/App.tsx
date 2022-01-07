import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToStudy from "./routes/ToStudy";
import AddResources from "./routes/AddResources";
import { useEffect, useState } from "react";
import { IUser } from "./components/AppHeader";
import axios from "axios";
import UserMain from "./routes/UserMain";

function App(): JSX.Element {
  const [userId, setUserId] = useState<string | null>(null);
  const [userList, setUserList] = useState<IUser[]>([]);

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
  };

  const savedUserId = retrieveSavedUser();

  useEffect(() => {
    setUserId(savedUserId ? savedUserId : null);
    console.log("useEffect was called");
  }, [savedUserId]);

  console.log(`The page has rendered and this is the userId state: ${userId}`);
  console.log(`This is the item saved in memory: ${savedUserId}`);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppHeader
                  userId={userId}
                  setUserId={setUserId}
                  userList={userList}
                  savedUserId={savedUserId ? savedUserId : ""}
                  setUserList={setUserList}
                />
                <MainContent />
              </>
            }
          />
          <Route
            path="/add-resources"
            element={
              <>
                <AppHeader
                  userId={userId}
                  setUserId={setUserId}
                  userList={userList}
                  savedUserId={savedUserId ? savedUserId : ""}
                  setUserList={setUserList}
                />
                <AddResources />
              </>
            }
          />
          <Route
            path="/to-study-list"
            element={
              <>
                <AppHeader
                  userId={userId}
                  setUserId={setUserId}
                  userList={userList}
                  savedUserId={savedUserId ? savedUserId : ""}
                  setUserList={setUserList}
                />
                <ToStudy savedUserId={savedUserId} />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
