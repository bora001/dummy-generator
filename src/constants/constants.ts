import {
  ANIMAL_EMOJI,
  COUNTRY_EMOJI,
  DESSERT_EMOJI,
  DRINK_EMOJI,
  FOOD_EMOJI,
  FRUIT_EMOJI,
  INSECT_EMOJI,
  NATURE_EMOJI,
  SPORT_EMOJI,
  TRANSPORTATION_EMOJI,
  VEGETABLE_EMOJI,
  WEATHER_EMOJI,
} from "./emoji/emoji";

export interface EmojiType {
  emoji: string; // emoji
  description: string; // emoji description
  codePoint: number; // emoji Unicode
  codePoint2?: number; // emoji Unicode2
}

export type EmojiGroupKey =
  | "animal"
  | "insect"
  | "country"
  | "dessert"
  | "drink"
  | "food"
  | "fruit"
  | "nature"
  | "sport"
  | "transportation"
  | "vegetable"
  | "weather";

export type EmojiGroups = Record<EmojiGroupKey, EmojiType[]>;

export interface ConstantType {
  emoji: EmojiGroups;
}
export const CONSTANTS: ConstantType = {
  emoji: {
    animal: ANIMAL_EMOJI,
    insect: INSECT_EMOJI,
    country: COUNTRY_EMOJI,
    dessert: DESSERT_EMOJI,
    drink: DRINK_EMOJI,
    food: FOOD_EMOJI,
    fruit: FRUIT_EMOJI,
    nature: NATURE_EMOJI,
    sport: SPORT_EMOJI,
    transportation: TRANSPORTATION_EMOJI,
    vegetable: VEGETABLE_EMOJI,
    weather: WEATHER_EMOJI,
  },
};
