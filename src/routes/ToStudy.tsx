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
    <div>
      <h1>To Study</h1>
      <p>{`This is the list to study of user ${savedUserId}`}</p>
      {toStudyResources}
    </div>
  );
};

export default ToStudy;
