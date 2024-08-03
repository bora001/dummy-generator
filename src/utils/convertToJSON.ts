export const convertToJSON = (str: string): object | undefined => {
  try {
    str = str.replace(/'/g, '"');
    str = str.replace(/([a-zA-Z0-9_]+)\s*:/gi, '"$1":');
    return JSON.parse(str);
  } catch (err) {
    console.error("Check your template:", str);
    return undefined;
  }
};
