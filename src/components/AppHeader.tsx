import NavBar from "./NavBar";

export default function AppHeader(): JSX.Element {
  return (
    <>
      <h1>Welcome to Cohort 3 Resource Catalogue</h1>
      <div className="LoginSelector">
        <select name="ChooseUser" id="ChooseUser">
          <option value="">Select User</option>
        </select>
      </div>
      <NavBar />
    </>
  );
}
