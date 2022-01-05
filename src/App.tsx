import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToStudy from "./routes/ToStudy";
import AddResources from "./routes/AddResources";
import { useState } from "react";
function App(): JSX.Element {
  const [userId, setUserId] = useState<string>("");

  return (
    <>
      {/* <AppHeader />
      <MainContent /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppHeader />{" "}
                <MainContent />{" "}
              </>
            }
          />
          <Route
            path="/:userid"
            element={
              <>
                <AppHeader />{" "}
                <MainContent />{" "}
              </>
            }
          />
          <Route
            path="/:userid/add-resources"
            element={
              <>
                <AppHeader />
                <AddResources />
              </>
            }
          />
          <Route
            path="/:userid/to-study-list"
            element={
              <>
                <AppHeader />
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
