import { getDate } from "./getDate";

test("Check datatype is a string", () => {
  expect(typeof getDate("2022-01-07T11:26:43.321Z")).toBe("string");
});

test("expected date returned", () => {
  expect(getDate("2022-01-07T11:26:43.321Z")).toBe("07/01/2022");
  expect(getDate("2022-11-14T11:26:43.321Z")).toBe("14/11/2022");
});
