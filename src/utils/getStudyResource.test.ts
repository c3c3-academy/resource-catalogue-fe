import { getStudyResources } from "./getStudyResources";
import { IResource, IToStudy } from "./Interfaces";

const mockResources: IResource[] = [
  {
    id: 1,
    resourcename: "PERN Stack Course",
    authorname: "Sanjeev Thiagarajan",
    url: "https://www.youtube.com/watch?v=J01rYl9T3BU&t=16404s&ab_channel=freeCodeCamp.org",
    description: "Learn PERN Stack by building a Yelp! clone",
    contenttype: "video",
    contentstage: "Week 8: SQL and Persistence",
    creationdate: "2022-01-13T14:04:39.534Z",
    postedbyuserid: "3",
    tags: ["react"],
    isrecommended: "good",
    reason: "I would recommend. 10/10 would do again",
  },
  {
    id: 2,
    resourcename: "Regular Expressions 101",
    authorname: "Firas Dib",
    url: "https://regex101.com/",
    description: "Help to build Regular Expressions",
    contenttype: "software tool",
    contentstage: "Week 2: TypeScript and Code Quality",
    creationdate: "2022-01-13T14:06:21.350Z",
    tags: ["react"],
    postedbyuserid: "3",
    isrecommended: "good",
    reason: "Really helpful to build a regular expression from scratch",
  },
  {
    id: 3,
    resourcename: "React BETA Docs Learning",
    authorname: "Meta Open Source",
    url: "https://beta.reactjs.org/learn",
    description: "Explanation and exercises for React.",
    tags: ["react"],
    contenttype: "exercise set",
    contentstage: "Week 3: React,HTML and CSS",
    creationdate: "2022-01-13T14:09:25.419Z",
    postedbyuserid: "1",
    isrecommended: "good",
    reason:
      "There are small exercises which allow you to test yourself on the function you are learning about.",
  },
];

const mockToStudyIds: IToStudy[] = [
  {
    id: 1,
    userid: 3,
    resourceid: 1,
  },
];

test("Check datatype is a IResourceList", () => {
  const result = getStudyResources(mockToStudyIds, mockResources);
  expect(typeof result[0].id).toBe("number");
  expect(typeof result[0].authorname).toBe("string");
  expect(typeof result[0].resourcename).toBe("string");
  expect(typeof result[0].url).toBe("string");
  expect(typeof result[0].description).toBe("string");
  expect(typeof result[0].tags).toBe("object");
  expect(typeof result[0].contenttype).toBe("string");
  expect(typeof result[0].contentstage).toBe("string");
  expect(typeof result[0].postedbyuserid).toBe("string");
  expect(typeof result[0].isrecommended).toBe("string");
  expect(typeof result[0].creationdate).toBe("string");
  expect(typeof result[0].reason).toBe("string");
});

test("Check the returned resource is correct", () => {
  const result = getStudyResources(mockToStudyIds, mockResources);
  const expectedResult = [
    {
      id: 1,
      resourcename: "PERN Stack Course",
      authorname: "Sanjeev Thiagarajan",
      url: "https://www.youtube.com/watch?v=J01rYl9T3BU&t=16404s&ab_channel=freeCodeCamp.org",
      description: "Learn PERN Stack by building a Yelp! clone",
      contenttype: "video",
      contentstage: "Week 8: SQL and Persistence",
      creationdate: "2022-01-13T14:04:39.534Z",
      postedbyuserid: "3",
      tags: ["react"],
      isrecommended: "good",
      reason: "I would recommend. 10/10 would do again",
    },
  ];
  expect(result).toStrictEqual(expectedResult);
});

test("Check if the toStudyIds is empty then we get an empty list back", () => {
  const result = getStudyResources([], mockResources);
  expect(result).toHaveLength(0);
  expect(result).toStrictEqual([]);
});
