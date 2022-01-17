import { IInteraction } from "./Interfaces";
import { getRating } from "./getRating";

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

test("Check datatype is a number", () => {
  expect(typeof getRating(3, "16", mockInteractionsList)).toBe("number");
});

test("expected value returned checking the rating of a resource", () => {
  expect(getRating(1, "3", mockInteractionsList)).toBe(4);
  expect(getRating(5, "16", mockInteractionsList)).toBe(0);
});
