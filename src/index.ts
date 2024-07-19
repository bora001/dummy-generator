/**
 * Generates dummyArray based on the provided template and repetition settings
 *
 * @param {string} template - The template string with placeholders (e.g., "{i}").
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

import { GenDummyTypes } from "./@types/index";
import { convertToJSON } from "./utils/convertToJSON";
import { isValidTime } from "./utils/isValidTime";

export const genDummy = ({ template, time, type }: GenDummyTypes) => {
  isValidTime(time);

  let isValidObject = true;
  let result: (string | object)[] = [];

  for (let i = 0; i < time; i++) {
    let newTemplate;
    if (!isValidObject) return [];
    if (template.includes(`{i}`)) {
      newTemplate = template.toString().replaceAll(`{i}`, String(i + 1));
    }
    if (type === "object") {
      isValidObject = convertToJSON(newTemplate as string);
      newTemplate = isValidObject;
    }
    result = result.concat([newTemplate ?? template]);
  }
  return result;
};
