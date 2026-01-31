const soma = require("../soma");

test("deve somar dois numeros corretamente", () => {
  expect(soma(2, 3)).toBe(5);
});

// espero que (soma(2,3),seja(5))
