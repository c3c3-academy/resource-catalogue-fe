import SingleResource from "./SingleResource";
import { useState, useEffect } from "react";
import axios from "axios";
import { containsTerm } from "../utils/containsTerm";
import { API_BASE } from "../utils/APIFragments";
import { IResource, ITag, IUser } from "../utils/Interfaces";

interface ResourcesProps {
  searchTerm: string;
  selectedTags: ITag[];
  userList: IUser[];
}

export default function Resources({
  searchTerm,
  userList,
  selectedTags,
}: ResourcesProps): JSX.Element {
  const [resources, setResources] = useState<IResource[]>([]);

  useEffect(() => {
    const fn = async () => {
      await axios
        .get(API_BASE + "/resources")
        .then(function (response) {
          const addTagsToSingleResource = async (resource: IResource) => {
            const tags = await axios
              .get(`${API_BASE}/tags/${resource.id}`)
              .then((response) => {
                return response.data.tags;
              });
            resource.tags = tags;
            return resource;
          };
          const getAllResourcesWithTags = async () => {
            const returnValue: IResource[] = [];

            for (const resource of response.data.resources) {
              const resourceWithTags = await addTagsToSingleResource(resource);
              returnValue.push(resourceWithTags);
            }
            return returnValue;
          };

          const resourcesWithTags = getAllResourcesWithTags();

          return resourcesWithTags;
        })
        .then((resourcesWithTags) => {
          setResources(resourcesWithTags);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fn();
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
