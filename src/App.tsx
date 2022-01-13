import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IResource, ITag, IUser } from "./utils/Interfaces";
import ToStudy from "./routes/ToStudy";
import AddResources from "./routes/AddResources";
import { API_BASE } from "./utils/APIFragments";

function App(): JSX.Element {
  const [userId, setUserId] = useState<string | null>(null);
  const [userList, setUserList] = useState<IUser[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [resources, setResources] = useState<IResource[]>([]);

  useEffect(() => {
    const fn = async () => {
      await axios
        .get(API_BASE + "/resources")
        .then(function (response) {
          const addTagsToSingleResource = async (resource: IResource) => {
            const tags = await axios
              .get(`${API_BASE}/tags/${resource.id}`)
              .then((response) => {
                return response.data.tags;
              });
            resource.tags = tags;
            return resource;
          };
          const getAllResourcesWithTags = async () => {
            const returnValue: IResource[] = [];

            for (const resource of response.data.resources) {
              const resourceWithTags = await addTagsToSingleResource(resource);
              returnValue.push(resourceWithTags);
            }
            return returnValue;
          };

          const resourcesWithTags = getAllResourcesWithTags();

          return resourcesWithTags;
        })
        .then((resourcesWithTags) => {
          setResources(resourcesWithTags);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fn();
  }, []);

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
                <MainContent
                  userList={userList}
                  userId={userId}
                  resources={resources}
                />
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
                <ToStudy savedUserId={savedUserId} resources={resources} />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
