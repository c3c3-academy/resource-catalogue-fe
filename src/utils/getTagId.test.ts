import { getTagId } from "./getTagId";
import { ITag } from "./Interfaces";
import axios from "axios";
import { API_BASE } from "./APIFragments";

const mockTagsList: ITag[] = [
  {
    id: 1,
    category: "html",
  },
  {
    id: 2,
    category: "react",
  },
  {
    id: 3,
    category: "css",
  },
  {
    id: 4,
    category: "TypeScript",
  },
  {
    id: 5,
    category: "JavaScript",
  },
];

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("Check that the return is a Promise", () => {
  expect(getTagId({ tagToCheck: "html", tags: mockTagsList })).toBeInstanceOf(
    Promise
  );
  expect(getTagId({ tagToCheck: "css", tags: mockTagsList })).toBeInstanceOf(
    Promise
  );
});

test("Check that if the tag in the tags list the correct id is returned", async () => {
  expect(await getTagId({ tagToCheck: "html", tags: mockTagsList })).toBe(1);
  expect(await getTagId({ tagToCheck: "css", tags: mockTagsList })).toBe(3);
});

test("Check that correct id is returned even when cases are different", async () => {
  expect(await getTagId({ tagToCheck: "typescript", tags: mockTagsList })).toBe(
    4
  );
  expect(await getTagId({ tagToCheck: "JAVASCRIPT", tags: mockTagsList })).toBe(
    5
  );
});

test("Check if post request happens when tag not in list", async () => {
  const tag: number | Promise<number> = new Promise<number>((resolve) =>
    resolve(5)
  );

  mockedAxios.post.mockReturnValueOnce(tag);

  const result = getTagId({ tagToCheck: "sql", tags: mockTagsList });

  expect(axios.post).toHaveBeenCalledWith(`${API_BASE}/tags`, {
    category: "sql",
  });
  expect(result).toEqual(tag);
  expect(result).toBeInstanceOf(Promise);
});
