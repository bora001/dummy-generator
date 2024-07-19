export const isValidTime = (time: number) => {
  if (time < 0) {
    console.error(
      `Error: Invalid input. Time cannot be less than 0. Your input: ${time}`
    );
    return false;
  }
  if (time > 10000) {
    console.error(
      `Error: Invalid input. Time cannot be more than 10000. Your input: ${time}`
    );
    return false;
  }
  if (typeof time !== "number") {
    console.error(
      `Error: Invalid input. Time only can be number. Your input: ${time}`
    );
    return false;
  }
  return true;
};
