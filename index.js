/**
 * Generates dummyArray based on the provided template and repetition settings
 *
 * @param {number} template - The template string with placeholders (e.g., "{i}").
 * @param {number} time - Number of times to repeat the template.
 * @param {number} type - Type of the template, such as "object".
 *
 *
 * Example usage:
 *
 * 1) string
 *   genDummy({ template: "this test is {i}", time: 3 })
 *
 * 2) object
 *   genDummy({
 *     template: `{name:'Lee', age:{i}, location:'Seoul'}`,
 *     time: 3,
 *     type: "object",
 *   })
 */

const convertToJSON = (str) => {
  try {
    str = str.replace(/'/g, '"');
    str = str.replace(/([a-zA-Z0-9_]+)\s*:/gi, '"$1":');
    return JSON.parse(str);
  } catch (err) {
    console.error("Check your template:", str);
    return undefined;
  }
};

const isValidTime = (time) => {
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

const genDummy = ({ template, time, type }) => {
  isValidTime(time);

  let isValidObject = true;
  let result = [];

  for (let i = 0; i < time; i++) {
    let newTemplate;
    if (!isValidObject) return [];
    if (template.includes(`{i}`)) {
      newTemplate = template.replaceAll(`{i}`, i + 1);
    }
    if (type === "object") {
      isValidObject = convertToJSON(newTemplate);
      newTemplate = isValidObject;
    }
    result = result.concat([newTemplate ?? template]);
  }
  return result;
};

module.exports = {
  genDummy,
};
