const analyze = require("../analyze");

test("tod test", () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect({ ...object }).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("personalized test", () => {
  const object = analyze([20, 15, 63, 34, 22, 54, 109, 11, 5]);
  expect({ ...object }).toEqual({
    average: 37,
    min: 5,
    max: 109,
    length: 9,
  });
});
