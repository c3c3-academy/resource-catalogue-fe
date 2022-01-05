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
            path="/dashboard"
            element={
              <div>
                <AppHeader /> <MainContent />{" "}
              </div>
            }
          />
          <Route path="/add-resources" element={<AddResources />} />
          <Route path="/to-study-list" element={<ToStudy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
