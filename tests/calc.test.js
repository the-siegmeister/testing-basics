const { add, subtract, divide, multiply } = require("../calc");

// add tests
test("1 + 1 is 2", () => {
  expect(add(1, 1)).toBe(2);
});
test("5 + 234 is 239", () => {
  expect(add(5, 234)).toBe(239);
});

// subtract tests
test("320 - 280 is 40", () => {
  expect(subtract(320, 280)).toBe(40);
});
test("30 - 80 is -50", () => {
  expect(subtract(30, 80)).toBe(-50);
});

// multiply tests
test("32 x 4 is 128", () => {
  expect(multiply(32, 4)).toBe(128);
});
test("12 x 5 is 60", () => {
  expect(multiply(12, 5)).toBe(60);
});

// divide tests
test("32 / 4 is 8", () => {
  expect(divide(32, 4)).toBe(8);
});
test("60 / 5 is 12", () => {
  expect(divide(60, 5)).toBe(12);
});
test("1200 / 0 is null", () => {
  expect(divide(1200, 0)).toEqual(null);
});
