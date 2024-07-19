export const isValidTime = (time: number) => {
  if (time < 0) {
    return console.error(
      `Error: Invalid input. Time cannot be less than 0. Your input: ${time}`
    );
  }
  if (time > 10000) {
    return console.error(
      `Error: Invalid input. Time cannot be more than 10000. Your input: ${time}`
    );
  }
  if (typeof time !== "number") {
    return console.error(
      `Error: Invalid input. Time only can be number. Your input: ${time}`
    );
  }
  return true;
};
