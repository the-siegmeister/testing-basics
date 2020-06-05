const caesar = require("../cipher");

test("AT SHIFT [5]: attack at dawn is fyyfhp fy ifbs", () => {
  expect(caesar(5, "attack at dawn !!")).toBe("fyyfhp fy ifbs !!");
});

test("AT SHIFT [1]: abcdefghijklmnopqrstuvwxyz is bcdefghijklmnopqrstuvwxyza", () => {
  expect(caesar(1, "abcdefghijklmnopqrstuvwxyz")).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("AT SHIFT [25]: abcdefghijklmnopqrstuvwxyz is bcdefghijklmnopqrstuvwxyza", () => {
  const initial = "abcdefghijklmnopqrstuvwxyz";
  const encrypt = caesar(25, initial);
  // decrypting should be equal to inital
  expect(caesar(-25, encrypt)).toBe(initial);
});

test("AT SHIFT[25]: 'this#is#really#something' is 'sghr#hr#qdzkkx#rnldsghmf'", () => {
  expect(caesar(25, "this#is#really#something")).toBe(
    "sghr#hr#qdzkkx#rnldsghmf"
  );
});

test("AT SHIFT [25]: A#A#A !! is Z#Z#Z !!", () => {
  expect(caesar(25, "A#A#A !!")).toBe("Z#Z#Z !!");
});

test("If there are no parameters expect null", () => {
  expect(caesar()).toEqual(null);
});

test("If shift is out of range, expect null", () => {
  expect(caesar(-300, "whatever")).toEqual(null);
});

test("If there are no text, expect null", () => {
  expect(caesar(7, "")).toEqual(null);
});
