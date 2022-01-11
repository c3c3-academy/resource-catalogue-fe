import { containsTerm } from "./containsTerm";

test("datatype is a boolean", () => {
  expect(typeof containsTerm("ell", "Hello")).toBe("boolean");
});

test("returns true when word appears in sentence", () => {
  expect(containsTerm("Brooklyn ", "Brooklyn Ninety-Nine")).toBe(true);
  expect(containsTerm("doctor", "you're not a real doctor")).toBe(true);
  expect(
    containsTerm("paper", "he had removed the shop's wrapping paper")
  ).toBe(true);
  expect(
    containsTerm("sixty", "sixty and hated waiting in cold antechambers")
  ).toBe(true);
});

test("returns false when word doesn't appear in the sentence", () => {
  expect(
    containsTerm(
      "Barcelona ",
      "But, you may say,we asked you to speak about women and fiction"
    )
  ).toBe(false);
  expect(
    containsTerm(
      "medium",
      "with some difficulty (for it is not easy for a pig to balance himself on a ladder)"
    )
  ).toBe(false);
  expect(
    containsTerm(
      "fifth",
      "It was a bright cold day in April, and the clocks were striking thirteen"
    )
  ).toBe(false);
  expect(
    containsTerm(
      "whatever",
      "something like that he said, smiling real horrorshow and friendly"
    )
  ).toBe(false);
});

test("returns true even if cases are different", () => {
  expect(containsTerm("brooklyn ", "Brooklyn Ninety-Nine")).toBe(true);
  expect(containsTerm("doctor", "you're not a real Doctor")).toBe(true);
  expect(
    containsTerm("paPer", "he had removed the shop's wrapping paper")
  ).toBe(true);
  expect(
    containsTerm("SIXTY", "sixty and hated waiting in cold antechambers")
  ).toBe(true);
});
