import SingleResource from "./SingleResource";
import { useState, useEffect } from "react";
import axios from "axios";
import { containsTerm } from "../utils/containsTerm";
import { API_BASE } from "../utils/APIFragments";
import { IResource } from "../utils/Interfaces";

interface ResourcesProps {
  searchTerm: string;
}
export default function Resources({ searchTerm }: ResourcesProps): JSX.Element {
  const [resources, setResources] = useState<IResource[]>([]);

  useEffect(() => {
    const fn = async () => {
      await axios
        .get(API_BASE + "/resources")
        .then(function (response) {
          const callBackFn = async (resource: IResource) => {
            const tags = await axios
              .get(`${API_BASE}/tags/${resource.id}`)
              .then((response) => {
                return response.data.tags;
              });
            resource.tags = tags;
            return resource;
          };

          const resourcesWithTags: IResource[] = [];

          response.data.resources.forEach(async (resource: IResource) => {
            const resourceWithTags = resource;
            resourcesWithTags.push(resourceWithTags);
          });
          return resourcesWithTags;
          // setResources(resourcesWithTags);
        })
        .then((resourcesWithTags) => {
          setResources(resourcesWithTags);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fn();

    // eslint-disable-next-line
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

  const allResourceElements = resources.map((resource) => (
    <SingleResource resource={resource} key={resource.id} />
  ));

  console.log("resources:", resources);
  console.log(
    "filteredResourches before map",
    resources.filter((element) => {
      console.log(element);
      if (searchTerm === "") {
        return true;
      } else if (
        containsTerm(searchTerm, element.resourcename) ||
        containsTerm(searchTerm, element.authorname) ||
        containsTerm(searchTerm, element.description) ||
        containsTerm(searchTerm, element.reason)
      ) {
        return true;
      } else {
        return false;
      }
    })
  );
  console.log("filteredresources after map", filteredResources);

  // if (
  //   searchTerm === "" &&
  //   filteredResources.length === 0 &&
  //   resources.length > 0
  // ) {
  //   setRerender(!rerender);
  //   console.log("page re-rendered due to our if on line 111");
  // }

  return (
    <div className="Resources">
      {filteredResources.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        <p>{filteredResources.length} resources found.</p>
      )}
      {/* {filteredResources} */}
      {allResourceElements}
    </div>
  );
}
