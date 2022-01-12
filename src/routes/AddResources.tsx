import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ITag } from "../utils/Interfaces";
import { API_BASE } from "../utils/APIFragments";
import axios from "axios";
import { getTagId } from "../utils/getTagId";
interface AddResourceProps {
  userId: string | null;
  tags: ITag[];
}

export default function AddResources(props: AddResourceProps): JSX.Element {
  useNavigate();

  const [resourceName, setResourceName] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [url, setURL] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [contentType, setContentType] = useState<string>("video");
  const [contentStage, setContentStage] = useState<string>("Week 1: Workflows");
  const [recommend, setRecommend] = useState<string>("good");
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
    "Week 4: React and event handlers",
    "Week 5: React and useEffect",
    "Week 6: Consolidation: Frontend ",
    "Week 7: Node.js and Express",
    "Week 8: SQL and Persistence",
    "Week 9: Consolidation: Backend",
    "Other",
  ];

  const contentStageOptions = contentStages.map((type, index) => (
    <option key={index} value={type}>
      {type}
    </option>
  ));

  const handleSubmit = async () => {
    let resourceId: number;

    await axios
      .post(`${API_BASE}/resources`, {
        resourcename: resourceName,
        authorname: authorName,
        url: url,
        description: description,
        contenttype: contentType,
        contentstage: contentStage,
        postedbyuserid: props.userId && parseInt(props.userId),
        isrecommended: recommend,
        reason: reason,
      })
      .then(function (response) {
        resourceId = response.data.resourceAdded.id;
      })
      .catch(function (error) {
        console.log(error);
      });

    const tagList = enteredTags.split(", ");
    tagList.forEach(async (tag) => {
      const tagId = await getTagId({ tagToCheck: tag, tags: props.tags });
      await axios
        .post(`${API_BASE}/tagrelations`, {
          tagid: tagId,
          resourceid: resourceId,
        })
        .catch(function (error) {
          console.log(error);
        });
    });

    setResourceName("");
    setAuthorName("");
    setURL("");
    setDescription("");
    setContentType("video");
    setContentStage("Week 1: Workflows");
    setRecommend("good");
    setReason("");
    setEnteredTags("");
  };

  return (
    <div>
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
          <label htmlFor="type">Content Type: </label>
          <select
            id="type"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            {contentTypesOptions}
          </select>
          <label htmlFor="stage">Recommeneded Stage: </label>
          <select
            id="stage"
            value={contentStage}
            onChange={(e) => setContentStage(e.target.value)}
          >
            {contentStageOptions}
          </select>
        </div>
        <label htmlFor="recommend">Do you recommend this resource?: </label>
        <select id="recommend" onChange={(e) => setRecommend(e.target.value)}>
          <option disabled>Recommened Type</option>
          <option value="good">
            I recommend this resource after having used it
          </option>
          <option value="bad">
            I do not recommend this resource, having used it
          </option>
          <option value="unknown">
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
      <button onClick={() => handleSubmit()}>Add Resource </button>
    </div>
  );
}
