type GenType = "string" | "object";
export type GenDummyTypes = {
  template: string;
  time: number;
  type?: GenType;
};

export type PreGenResultTypes = (string | object)[];
