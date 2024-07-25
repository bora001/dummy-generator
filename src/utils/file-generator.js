#!/usr/bin/env node

import { genDummy } from "../../dist/index.js";
import { saveFile } from "../../dist/utils/saveFile.js";
import inquirer from "inquirer";

console.log("🟢 Welcome to dummy-array-generator 🌱");

const isValidString = (value) => {
  const isValid = value.trim().length > 0;
  const isOnlyString = /^[a-zA-Z]+$/.test(value);
  if (!isValid) {
    return "Please check the name";
  }
  if (!isOnlyString) {
    return "Please enter only String";
  }
  return isValid && isOnlyString;
};

const StringQuestion = {
  type: "input",
  name: "template",
  message: "Enter your template",
  when(answers) {
    // if type is object
    if (answers.type === "object") {
      return;
    }
    return answers.exported;
  },
};

const objectQuestion = [
  {
    type: "input",
    name: "key",
    message: "Enter the key of the object",
    validate(value) {
      return isValidString(value);
    },
    when(answers) {
      // if type is object
      if (answers.type === "string") {
        return;
      }
      return answers.exported;
    },
  },
  {
    type: "input",
    name: "value",
    message: "Enter the value of the object",
    when(answers) {
      if (answers.type === "string") {
        return;
      }
      return answers.exported;
    },
  },
];

const questions = [
  {
    type: "confirm",
    name: "exported",
    message: "Do you want to export the dummy array as a file?",
    default: false,
  },
  {
    type: "list",
    name: "type",
    message: "what is the type of the array?",
    choices: ["string", "object"],
    when(answers) {
      return answers.exported;
    },
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: "input",
    name: "name",
    message: "what is the name of the array?",
    when(answers) {
      return answers.exported;
    },
    validate(value) {
      return isValidString(value);
    },
    filter(val) {
      return val.toLowerCase();
    },
  },
  StringQuestion,
  ...objectQuestion,
  {
    type: "input",
    name: "time",
    message: "How many times do you want to repeat?",
    validate(value) {
      const valid = !Number.isNaN(Number.parseFloat(value));
      return valid || "Please enter a number";
    },
    filter: Number,
    when(answers) {
      return answers.exported;
    },
  },
  {
    type: "input",
    name: "fileName",
    message: "define your file name",
    validate(value) {
      return isValidString(value);
    },
    when(answers) {
      return answers.exported;
    },
  },
  {
    type: "list",
    name: "fileType",
    message: "choose type of your file",
    choices: [".js"],
    when(answers) {
      return answers.exported;
    },
    filter(val) {
      return val.toLowerCase();
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  if (!answers.exported) {
    console.log("Generating file is cancelled.");
    process.exit(0);
  }

  const {
    name,
    template,
    time,
    type,
    exported,
    fileName,
    fileType,
    key,
    value,
  } = answers;

  const result = genDummy({
    template:
      type === "string"
        ? template.trim()
        : `{ ${[key.trim()]}: '${value.trim()}' }`,
    time: +time,
    type,
    exported,
  });
  saveFile({
    type,
    result,
    fileInfo: {
      fileName,
      fileType,
      name,
    },
  });
});
