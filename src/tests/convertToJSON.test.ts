import { convertToJSON } from "../utils/convertToJSON.js";

describe("convertToJSON", () => {
  it("should convert a valid string to JSON", () => {
    const str = "{'key': 'value'}";
    const result = convertToJSON(str);
    expect(result).toEqual({ key: "value" });
  });

  it("should return undefined for invalid JSON string", () => {
    const str = "{key: value}";
    const result = convertToJSON(str);
    expect(result).toBeUndefined();
  });
});
