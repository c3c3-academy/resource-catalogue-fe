import { isRecommended } from "./isRecommended";

test("Check datatype is a string", () => {
  expect(typeof isRecommended("good")).toBe("string");
  expect(typeof isRecommended("bad")).toBe("string");
  expect(typeof isRecommended("unknown")).toBe("string");
});

test("Check return is the correct statement", () => {
  expect(isRecommended("good")).toBe(
    "I recommend this resource after having used it"
  );
  expect(isRecommended("bad")).toBe(
    "I do not recommend this resource, having used it"
  );
  expect(isRecommended("unknown")).toBe(
    "I haven't used this resource but it looks promising"
  );
});
