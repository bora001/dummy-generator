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
 * 1) string (Default)
 *   genDummy({ template: "this test is {i}", time: 3 })
 *
 * 2) object
 *   genDummy({
 *     template: `{name:'Lee', age:{i}, location:'Seoul'}`,
 *     time: 3,
 *     type: "object",
 *   })
 *
 * 3) template variables
 *   genDummy({
 *     template: `{food}({i}) is on the sale`,
 *     time: 5,
 *   })
 *
 *   genDummy({
 *     template: `{weather:{weather}, location: {country}}`,
 *     time: 3,
 *     type: "object",
 *   })
 */

import { GenDummyTypes, PreGenResultTypes } from "./@types/index.js";
import { CONSTANTS, EmojiGroupKey } from "./constants/constants.js";
import { convertToJSON } from "./utils/convertToJSON.js";
import { isValidTime } from "./utils/isValidTime.js";

export const genDummy = ({ template, time, type }: GenDummyTypes) => {
  isValidTime(time);

  let isValidObject = true;
  let result: PreGenResultTypes = [];
  const isEmojiType = Object.keys(CONSTANTS.emoji).map((item) => `{${item}}`);
  const EmojiList = isEmojiType.filter((item) => template.includes(item));

  for (let i = 0; i < time; i++) {
    let newTemplate: string | object = template.toString();
    if (!isValidObject) return [];

    if (template.includes(`{i}`)) {
      newTemplate = template.toString().replaceAll(`{i}`, String(i + 1));
    }

    if (EmojiList) {
      EmojiList.map((item) => {
        const key = item.slice(1, -1);
        const list = CONSTANTS.emoji[key as EmojiGroupKey];
        const randomIndex = Math.floor(Math.random() * list.length);
        const sentence = newTemplate ? newTemplate : template;
        const valueFormat =
          type === "object"
            ? `"${list[randomIndex].description}"`
            : list[randomIndex].description;
        newTemplate = sentence.toString().replaceAll(item, valueFormat);
      });
    }

    if (type === "object") {
      const jsonObject = convertToJSON(newTemplate);
      isValidObject = jsonObject !== undefined;
      newTemplate = jsonObject !== undefined ? jsonObject : newTemplate;
    }

    result = result.concat([newTemplate ?? template]);
  }

  return result;
};
