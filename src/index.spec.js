const Calc = require("./index");

describe("Name of the group", () => {
  it("should have items", () => {
    expect(Calc.getItems()).toEqual(2);
  });
  it("should set num in items", () => {
    expect(Calc.setItems(2)).toEqual(4);
  });
});
