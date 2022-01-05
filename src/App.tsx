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
                <AppHeader userId={userId} setUserId={setUserId} />{" "}
                <MainContent />{" "}
              </>
            }
          />
          <Route
            path="/add-resources"
            element={
              <>
                <AppHeader userId={userId} setUserId={setUserId} />
                <AddResources />
              </>
            }
          />
          <Route
            path="/to-study-list"
            element={
              <>
                <AppHeader userId={userId} setUserId={setUserId} />
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
