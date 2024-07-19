import { isValidTime } from "../utils/isValidTime";

describe("isValidTime", () => {
  it("should return true for valid time", () => {
    expect(isValidTime(1000)).toBe(true);
  });

  it("should log an error and return false for negative time", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();
    expect(isValidTime(-1)).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error: Invalid input. Time cannot be less than 0. Your input: -1"
    );
    consoleSpy.mockRestore();
  });

  it("should log an error and return false for time greater than 10000", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();
    expect(isValidTime(10001)).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error: Invalid input. Time cannot be more than 10000. Your input: 10001"
    );
    consoleSpy.mockRestore();
  });

  it("should log an error and return false for non-numeric time", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();
    expect(isValidTime("string" as any)).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error: Invalid input. Time only can be number. Your input: string"
    );
    consoleSpy.mockRestore();
  });
});
