import { inStudyList } from "./inStudyList";
import { IToStudy } from "./Interfaces";

const mockToStudyList: IToStudy[] = [
  {
    id: 6,
    userid: 3,
    resourceid: 6,
  },
  {
    id: 11,
    userid: 3,
    resourceid: 1,
  },

  {
    id: 12,
    userid: 17,
    resourceid: 7,
  },
];

test("Check if the return type is a boolean", () => {
  expect(typeof inStudyList(1, "3", mockToStudyList)).toBe("boolean");
  expect(typeof inStudyList(5, "3", mockToStudyList)).toBe("boolean");
});

test("returns true when resource appears in study list", () => {
  expect(inStudyList(6, "3", mockToStudyList)).toBe(true);
  expect(inStudyList(1, "3", mockToStudyList)).toBe(true);
  expect(inStudyList(7, "17", mockToStudyList)).toBe(true);
});

test("returns false when resource does not appears in study list", () => {
  expect(inStudyList(9, "18", mockToStudyList)).toBe(false);
  expect(inStudyList(10, "21", mockToStudyList)).toBe(false);
  expect(inStudyList(6, "23", mockToStudyList)).toBe(false);
});

test("returns false when userid is null", () => {
  expect(inStudyList(9, null, mockToStudyList)).toBe(false);
  expect(inStudyList(10, null, mockToStudyList)).toBe(false);
  expect(inStudyList(6, null, mockToStudyList)).toBe(false);
});
