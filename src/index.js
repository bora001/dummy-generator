"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.genDummy = void 0;
var convertToJSON = function (str) {
    try {
        str = str.replace(/'/g, '"');
        str = str.replace(/([a-zA-Z0-9_]+)\s*:/gi, '"$1":');
        return JSON.parse(str);
    }
    catch (err) {
        console.error("Check your template:", str);
        return undefined;
    }
};
var isValidTime = function (time) {
    if (time < 0) {
        return console.error("Error: Invalid input. Time cannot be less than 0. Your input: ".concat(time));
    }
    if (time > 10000) {
        return console.error("Error: Invalid input. Time cannot be more than 10000. Your input: ".concat(time));
    }
    if (typeof time !== "number") {
        return console.error("Error: Invalid input. Time only can be number. Your input: ".concat(time));
    }
    return true;
};
var genDummy = function (_a) {
    var template = _a.template, time = _a.time, type = _a.type;
    isValidTime(time);
    var isValidObject = true;
    var result = [];
    for (var i = 0; i < time; i++) {
        var newTemplate = void 0;
        if (!isValidObject)
            return [];
        if (template.includes("{i}")) {
            newTemplate = template.toString().replaceAll("{i}", String(i + 1));
        }
        if (type === "object") {
            isValidObject = convertToJSON(newTemplate);
            newTemplate = isValidObject;
        }
        result = result.concat([newTemplate !== null && newTemplate !== void 0 ? newTemplate : template]);
    }
    return result;
};
exports.genDummy = genDummy;
