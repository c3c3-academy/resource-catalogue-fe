import SingleResource from "./SingleResource";
import { useState, useEffect } from "react";
import axios from "axios";

interface Resource {
  id: string;
  author: string;
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
export default function Resources(): JSX.Element {
  const [resources, setResources] = useState<Resource[]>([]);

  const baseURL = "https://resource-catalogue-be.herokuapp.com/";

  useEffect(() => {
    axios
      .get(baseURL + "resources")
      .then(function (response) {
        setResources(response.data.resources);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(resources);

  return (
    <div className="Resources">
      {/* {resources.length !== 0 && */}
      {resources.map((resource) => (
        <SingleResource resource={resource} key={resource.id} />
      ))}
    </div>
  );
}
