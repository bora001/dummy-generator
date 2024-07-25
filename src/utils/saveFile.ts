import fs from "fs";
import path from "path";
import { GenDummyTypes, PreGenResultTypes } from "../@types/index.js";

export type GenDummyFileTypes = {
  fileName: string;
  fileType: string;
  name: string;
};
type saveFileTypes = {
  type: GenDummyTypes["type"];
  result: PreGenResultTypes;
  fileInfo: GenDummyFileTypes;
};

const countSameNameFiles = (
  dirPath: string,
  fileName: string,
  fileType: string
) => {
  try {
    const files = fs.readdirSync(dirPath);
    const sameFileName = files.filter((file) => {
      return file.startsWith(fileName) && file.endsWith(fileType);
    });
    return sameFileName.length;
  } catch (error) {
    console.error("Error reading directory:", error);
    return 0;
  }
};

const isFilePathExist = (fileName: string, fileType: string) => {
  const output = `./src/generated/${fileName}${fileType}`;
  const __dirname = process.env.PWD || process.cwd();
  const filePath = path.join(__dirname, output);
  const dirPath = path.dirname(filePath);
  if (fs.existsSync(filePath)) {
    const length = countSameNameFiles(dirPath, fileName, fileType);
    const newPath = `./src/generated/${fileName}_${length}${fileType}`;
    return path.join(__dirname, newPath);
  } else {
    fs.mkdirSync(dirPath, { recursive: true });
    return filePath;
  }
};

export const saveFile = ({ type, result, fileInfo }: saveFileTypes) => {
  if (!fileInfo) return;
  const generatedFilePath = isFilePathExist(
    fileInfo.fileName,
    fileInfo.fileType
  );

  const content = JSON.stringify(result);
  const fileContent = `export const ${fileInfo.name} = ${content};`;

  fs.writeFile(generatedFilePath, fileContent, (err) => {
    if (err) {
      console.error("⛔️ An error occurred while generating the file:", err);
    } else {
      console.log("✅ The file has been successfully created.");
    }
  });
};
