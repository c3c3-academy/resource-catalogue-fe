import { hasUserCommented } from "./hasUserCommented";
import { IInteraction } from "./Interfaces";

const mockInteractionsList: IInteraction[] = [
  {
    id: 1,
    userid: 3,
    resourceid: 1,
    rating: 4,
    comment: "Loved it",
  },
  {
    id: 2,
    userid: 3,
    resourceid: 1,
    rating: 4,
    comment: "I really enjoyed it",
  },
  {
    id: 3,
    userid: 3,
    resourceid: 1,
    rating: 5,
    comment: "hello",
  },
  {
    id: 10,
    userid: 16,
    resourceid: 4,
    rating: 4,
    comment: "commented this as Martha (18)",
  },
  {
    id: 11,
    userid: 16,
    resourceid: 4,
    rating: 4,
    comment: "commented this as Martha (18)",
  },
];

test("Check datatype is a boolean", () => {
  expect(typeof hasUserCommented(3, "16", mockInteractionsList)).toBe(
    "boolean"
  );
});

test("expected value returned checking if the user has interacted with the resource", () => {
  expect(hasUserCommented(1, "3", mockInteractionsList)).toBe(true);
  expect(hasUserCommented(5, "16", mockInteractionsList)).toBe(false);
});
