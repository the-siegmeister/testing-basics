const reverse = require("../reverse");

test("racecar should be racecar", () => {
  expect(reverse("racecar")).toBe("racecar");
});

test("peck should be kcep", () => {
  expect(reverse("peck")).toBe("kcep");
});

test("superlongword", () => {
  expect(reverse("superlongword")).toBe("drowgnolrepus");
});
