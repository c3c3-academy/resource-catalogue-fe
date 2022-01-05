import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IResource, ITag } from "../utils/Interfaces";
import { getTagId } from "../utils/getTagId";
import NavBar from "../components/NavBar";
import { API_BASE } from "../utils/APIFragments";
import axios from "axios";
interface IAddResource {
  userId: number;
  tags: ITag[];
}

export default function AddResources(props: IAddResource): JSX.Element {
  const [resource, setResource] = useState<IResource | null>(null);
  const [resourceId, setResourceId] = useState<number | null>(null);

  const [resourceName, setResourceName] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [url, setURL] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [contentType, setContentType] = useState<string>("");
  const [contentStage, setContentStage] = useState<string>("");
  const [recommend, setRecommend] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [enteredTags, setEnteredTags] = useState<string>("");

  const contentTypes = [
    "video",
    "article",
    "ebook",
    "podcast",
    "exercise",
    "exercise set",
    "software tool",
    "course",
    "diagram",
    "cheat-sheet",
    "reference",
    "resource list",
    "youtube channel",
    "organisation",
    "other",
  ];
  const contentTypesOptions = contentTypes.map((type, index) => (
    <option key={index} value={type}>
      {type}
    </option>
  ));

  const contentStages = [
    "Week 1: Workflows",
    "Week 2: TypeScript and Code Quality",
    "Week 3: React,HTML and CSS",
    "Week 4: Consolidation ",
    "Week 5: React and useEffect",
    "Week 6: Consolidation",
    "Week 7: Node.js Express",
    "Week 8: SQL and Persistence",
    "Other",
  ];

  const contentStageOptions = contentStages.map((type, index) => (
    <option key={index} value={type}>
      {type}
    </option>
  ));

  /* eslint-disable  @typescript-eslint/no-unused-vars */
  const history = useNavigate();
  /* eslint-enable  @typescript-eslint/no-unused-vars */

  const handleSubmit = () => {
    setResource({
      resourceName: resourceName,
      authorName: authorName,
      url: url,
      description: description,
      contentType: contentType,
      contentStage: contentStage,
      postedByUserId: props.userId,
      isRecommend: recommend,
      reason: reason,
    });

    axios
      .post(`${API_BASE}/resources`, resource)
      .then(function (response) {
        console.log(response);
        setResourceId(response.data.id);
      })
      .catch(function (error) {
        console.log(error);
      });

    const tagList = enteredTags.split(", ");
    tagList.forEach((tag) => {
      const tagId = getTagId({ tagToCheck: tag, tags: props.tags });
      if (tagId !== -1) {
        axios
          .post(`${API_BASE}/tagrelations`, {
            tagid: tagId,
            resourceid: resourceId,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
    setResource(null);
    setResourceId(null);

    setResourceName("");
    setAuthorName("");
    setURL("");
    setDescription("");
    setContentType("");
    setContentStage("");
    setRecommend("");
    setReason("");
    setEnteredTags("");
  };

  return (
    <div>
      <NavBar />
      <h1>Add Resource</h1>

      <form>
        <div>
          <input
            type="text"
            placeholder="Add a resource name"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add an author name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add URL"
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add decription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add tags (separate with comma ', ')"
            value={enteredTags}
            onChange={(e) => setEnteredTags(e.target.value)}
          />
        </div>
        <div>
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            <option disabled>Content Type</option>
            {contentTypesOptions}
          </select>
          <select
            value={contentStage}
            onChange={(e) => setContentStage(e.target.value)}
          >
            <option disabled>Recommeneded Stage</option>
            {contentStageOptions}
          </select>
        </div>
        <p>Do you recommend this resource?</p>
        <select onChange={(e) => setRecommend(e.target.value)}>
          <option disabled>Recommened Type</option>
          <option value="1">
            I recommend this resource after having used it
          </option>
          <option value="2">
            I do not recommend this resource, having used it
          </option>
          <option value="3">
            I haven't used this resource but it looks promising
          </option>
        </select>
        <div>
          <input
            type="text"
            placeholder="Explain why"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
      </form>
      <button onClick={handleSubmit}>Add Resource </button>
    </div>
  );
}
