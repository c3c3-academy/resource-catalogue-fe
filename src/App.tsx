import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ITag, IUser } from "./utils/Interfaces";
import ToStudy from "./routes/ToStudy";
import AddResources from "./routes/AddResources";
import { API_BASE } from "./utils/APIFragments";

function App(): JSX.Element {
  const [userId, setUserId] = useState<string | null>(null);
  const [userList, setUserList] = useState<IUser[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
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

  useEffect(() => {
    axios
      .get(`${API_BASE}/tags`)
      .then(function (response) {
        setTags(response.data.tags);
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
                <MainContent userList={userList} userId={userId} />
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
                <AddResources userId={userId} tags={tags} />
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
