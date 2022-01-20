import "../styles/ToStudy.css";
import SingleResourceLoggedIn from "../components/SingleResourceLoggedIn";
import { useNavigate } from "react-router-dom";
import { IResource, IToStudy, IUser } from "../utils/Interfaces";
import { getStudyResources } from "../utils/getStudyResources";

interface ToStudyProps {
  savedUserId: string | null;
  resources: IResource[];
  userList: IUser[];
  toStudyIds: IToStudy[];
  getToStudy: boolean;
  setGetToStudy: (input: boolean) => void;
}

const ToStudy = ({
  savedUserId,
  resources,
  userList,
  toStudyIds,
  getToStudy,
  setGetToStudy,
}: ToStudyProps): JSX.Element => {
  useNavigate();

  const toStudyResources = getStudyResources(toStudyIds, resources).map(
    (resource) => (
      <SingleResourceLoggedIn
        key={resource.id}
        resource={resource}
        userList={userList}
        userId={savedUserId}
        toStudyIds={toStudyIds}
        getToStudy={getToStudy}
        setGetToStudy={setGetToStudy}
      />
    )
  );

  return (
    <div className="ToStudy">
      <h1>My Box of Resources</h1>
      <p>
        Your finest selection of resources, tailor picked to study by you, for
        you.
      </p>
      {toStudyResources}
    </div>
  );
};

export default ToStudy;
