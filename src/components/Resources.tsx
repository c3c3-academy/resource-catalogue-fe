import SingleResource from "./SingleResource";
import SingleResourceLoggedIn from "./SingleResourceLoggedIn";
import { containsTerm } from "../utils/containsTerm";
import { IResource, ITag, IUser } from "../utils/Interfaces";

interface ResourcesProps {
  searchTerm: string;
  selectedTags: ITag[];
  userList: IUser[];
  userId: string | null;
  resources: IResource[];
<<<<<<< HEAD
  toStudyIds: IToStudy[];
  getToStudy: boolean;
  setGetToStudy: (input: boolean) => void;
=======
>>>>>>> main
}

export default function Resources({
  searchTerm,
  userList,
  selectedTags,
  userId,
  resources,
<<<<<<< HEAD
  toStudyIds,
  getToStudy,
  setGetToStudy,
=======
>>>>>>> main
}: ResourcesProps): JSX.Element {
  const filteredResources = resources
    .filter((element) => {
      if (searchTerm === "") {
        return element;
      } else if (
        containsTerm(searchTerm, element.resourcename) ||
        containsTerm(searchTerm, element.authorname) ||
        containsTerm(searchTerm, element.description) ||
        containsTerm(searchTerm, element.reason) ||
        containsTerm(searchTerm, element.tags.join(" "))
      ) {
        return element;
      } else {
        return false;
      }
    })
    .filter((element) => {
      if (selectedTags.length === 0) {
        return element;
      } else {
        for (const tag of selectedTags) {
          if (containsTerm(tag.category, element.tags.join(" "))) {
            return element;
          }
        }
        return false;
      }
    })
    .map((resource) => {
      return userId === null ? (
        <SingleResource
          userList={userList}
          resource={resource}
          key={resource.id}
        />
      ) : (
        <SingleResourceLoggedIn
          userList={userList}
          resource={resource}
          key={resource.id}
          userId={userId}
<<<<<<< HEAD
          toStudyIds={toStudyIds}
          getToStudy={getToStudy}
          setGetToStudy={setGetToStudy}
=======
>>>>>>> main
        />
      );
    });

  return (
    <div className="Resources">
      {filteredResources.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        <p>{filteredResources.length} resources found.</p>
      )}
      {filteredResources}
    </div>
  );
}
