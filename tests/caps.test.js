const capitalize = require("../caps");

test("peck", () => {
  expect(capitalize("peck")).toBe("Peck");
});

test("aReallyLongWord", () => {
  expect(capitalize("aReallyLongWord")).toBe("AReallyLongWord");
});

test("everythingissmall", () => {
  expect(capitalize("everythingissmall")).toBe("Everythingissmall");
});
test("something with spaces", () => {
  expect(capitalize("something with spaces")).toBe("Something with spaces");
});
