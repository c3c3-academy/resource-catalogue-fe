import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ITag } from "./utils/Interfaces";
import ToStudy from "./routes/ToStudy";
import AddResources from "./routes/AddResources";
import { API_BASE } from "./utils/APIFragments";

function App(): JSX.Element {
  const [userId, setUserId] = useState<number>(1);
  const [tags, setTags] = useState<ITag[]>([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/tags`)
      .then(function (response) {
        setTags(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* <AppHeader />
      <MainContent /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <AppHeader /> <MainContent />{" "}
              </div>
            }
          />
          <Route
            path="/add-resources"
            element={<AddResources userId={userId} tags={tags} />}
          />
          <Route path="/to-study-list" element={<ToStudy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
