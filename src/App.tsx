import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToStudy from "./routes/ToStudy";
import AddResources from "./routes/AddResources";
function App(): JSX.Element {
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
                <AppHeader /> <MainContent />{" "}
              </>
            }
          />
          <Route
            path="/add-resources"
            element={
              <>
                <AppHeader />
                <AddResources />
              </>
            }
          />
          <Route
            path="/to-study-list"
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
