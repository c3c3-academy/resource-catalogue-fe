import { isRecommended } from "./isRecommended";

test("Check datatype is a string", () => {
  expect(typeof isRecommended("good")).toBe("string");
  expect(typeof isRecommended("bad")).toBe("string");
  expect(typeof isRecommended("unknown")).toBe("string");
});

test("Check return is the correct statement", () => {
  expect(isRecommended("good")).toBe("👍");
  expect(isRecommended("bad")).toBe("👎");
  expect(isRecommended("unknown")).toBe("🤷");
});
