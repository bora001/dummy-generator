import { genDummy } from "../index.js";

describe("genDummy", () => {
  it("should generate dummy data for a given template", () => {
    const template = "Item {i}";
    const result = genDummy({ template, time: 3, type: "string" });
    expect(result).toEqual(["Item 1", "Item 2", "Item 3"]);
  });

  it("should return an array of objects if type is 'object'", () => {
    const template = "{'key': 'value{i}'}";
    const result = genDummy({ template, time: 2, type: "object" });
    expect(result).toEqual([{ key: "value1" }, { key: "value2" }]);
  });

  it("should return an empty array if invalid time is provided", () => {
    const template = "Item {i}";
    const result = genDummy({ template, time: -1, type: "string" });
    expect(result).toEqual([]);
  });

  it("should return an empty array if the template is invalid for JSON conversion", () => {
    const template = "{key: value{i}}";
    const result = genDummy({ template, time: 2, type: "object" });
    expect(result).toEqual([]);
  });
});
