const isEven = require("../isEven");

describe();
test("deve retonar true para numero par", () => {
  expect(isEven(5)).toBe(true);
});
test("deve retonar false para numero ímpar", () => {
  expect(isEven(2)).toBe(false);
});
