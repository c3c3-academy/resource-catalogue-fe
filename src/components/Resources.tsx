import SingleResource from "./SingleResource";
import { useState, useEffect } from "react";
import axios from "axios";
import { containsTerm } from "../utils/containsTerm";
import { IResource, IUser } from "../utils/Interfaces";

interface ResourcesProps {
  searchTerm: string;
  userList: IUser[];
  searchTag: string;
}
export default function Resources({
  searchTerm,
  userList,
  searchTag,
}: ResourcesProps): JSX.Element {
  const [resources, setResources] = useState<IResource[]>([]);

  const baseURL = "https://resource-catalogue-be.herokuapp.com/";

  useEffect(() => {
    axios
      .get(baseURL + "resources")
      .then(function (response) {
        setResources(response.data.resources);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const filteredResources = resources
    .filter((element) => {
      if (searchTerm === "") {
        return element;
      } else if (
        containsTerm(searchTerm, element.resourcename) ||
        containsTerm(searchTerm, element.authorname) ||
        containsTerm(searchTerm, element.description) ||
        containsTerm(searchTerm, element.reason) ||
        containsTerm(searchTerm, searchTag)
      ) {
        return element;
      } else {
        return false;
      }
    })
    .map((resource) => (
      <SingleResource
        userList={userList}
        resource={resource}
        key={resource.id}
      />
    ));

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
