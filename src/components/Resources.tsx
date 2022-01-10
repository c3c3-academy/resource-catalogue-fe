import SingleResource from "./SingleResource";
import { useState, useEffect } from "react";
import axios from "axios";
import { containsTerm } from "../utils/containsTerm";

interface Resource {
  id: string;
  authorname: string;
  resourcename: string;
  url: string;
  description: string;
  tags: string;
  contenttype: string;
  contentstage: string;
  postedbyuserid: string;
  isrecommended: string;
  creationdate: string;
  reason: string;
}

interface ResourcesProps {
  searchTerm: string;
}
export default function Resources({ searchTerm }: ResourcesProps): JSX.Element {
  const [resources, setResources] = useState<Resource[]>([]);

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
        containsTerm(searchTerm, element.reason)
      ) {
        return element;
      } else {
        return false;
      }
    })
    .map((resource) => (
      <SingleResource resource={resource} key={resource.id} />
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
