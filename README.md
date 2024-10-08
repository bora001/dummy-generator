# Dummy Array Generator

Generate custom dummy arrays effortlessly with dummy-array-generator. This package is designed to help developers create repetitive dummy components efficiently, particularly when working with modern JavaScript frameworks like React and Next.js.

With dummy-array-generator, you can streamline your development workflow by generating the dummy data you need with ease. You can even create dummy arrays using specific templates, allowing you to tailor the data structure to fit your exact needs.

- ⚠️ Note: Currently a work in progress 🌱

## Installation

```
$ npm i dummy-array-generator
$ npm install dummy-array-generator

$ pnpm add dummy-array-generator
```

## Quick Usage

### 1) String

```ts
import { genDummy } from "dummy-array-generator";

const testDummy = genDummy({ template: "this test is {i}", time: 3 });

// returns [ 'this test is 1', 'this test is 2', 'this test is 3' ]
```

### 2) Object

```ts
import { genDummy } from "dummy-array-generator";

const userDummy = genDummy({
  template: `{name:'Lee', age:{i}, location:'Seoul'}`,
  time: 3,
  type: "object",
});

// returns
// [
//  { name: 'Lee', age: 1, location: 'Seoul' },
//  { name: 'Lee', age: 2, location: 'Seoul' },
//  { name: 'Lee', age: 3, location: 'Seoul' }
// ]
```

### 3) Template Variables

- Each variable in a template is replaced with specific data. The data is selected randomly from predefined lists.

```
{i}, {animal}, {insect}, {country},
{dessert}, {drink}, {food}, {fruit}, {nature},
{sport}, {transportation}, {vegetable}, {weather}
```

```ts
const promotionDummyTemplate = genDummy({
  template: `{food} is on the sale for \${i}`,
  time: 5,
});

// returns
// [
//   'Roasted Sweet Potato is on the sale for $1',
//   'Shallow Pan of Food is on the sale for $2',
//   'Pancakes is on the sale for $3',
//   'Pizza is on the sale for $4',
//   'Taco is on the sale for $5'
// ]

const dummyWeatherInfo = genDummy({
  template: `{weather:{weather}, location: {country}}`,
  time: 4,
  type: "object",
});

// returns
// [
//   {
//     weather: "Sun",
//     location: "South Korea",
//   },
//  {
//     "weather": "Rainbow",
//     "location": "Spain"
//  },
//   {
//     weather: "Cloud with Lightning",
//     location: "Morocco",
//   },
//   {
//     weather: "Snowflake",
//     location: "Canada",
//   },
// ];
```

<hr/>

## A File Generator with CLI

```ts
$ npm run dummy-export

$ pnpm dummy-export
```

- It allows users to create files with specific content and formats directly from the command line.

> <img width="380" alt="스크린샷 2024-07-24 오전 12 03 21" src="https://github.com/user-attachments/assets/e97c1f4d-506c-4b52-a892-ff37085254f2"> <br/>
> It currently supports two types of arrays: strings and objects

> <img width="226" alt="스크린샷 2024-07-24 오전 12 04 26" src="https://github.com/user-attachments/assets/5eee1cd8-fac0-4126-a0f2-9f231e0472c8"> <br/>
> The dummy-array file is generated in the src/generated folder, and this part will be improved soon.

### 1) String

```sh
🟢 Welcome to dummy-array-generator 🌱
? Export the dummy array as a file ? yes
? Type of the array : string
? Name of the array : fakeArticle
? Enter your template article :{i}
? Enter repeat count : 7
? Define your file name : fakeArticle
? Type of your file : .js
✅ The file has been successfully created.
```

```js
// src/generated/fakeArticle.js
export const fakeArticle = [
  "article 1",
  "article 2",
  "article 3",
  ..."article 7",
];
```

### 2) Object

```sh
🟢 Welcome to dummy-array-generator 🌱
? Export the dummy array as a file ? yes
? Type of the array : object
? Name of the array : fakeUser
? Enter the key of the object : userId
? Enter the value of the object : user {i}
? Enter repeat count : 13
? Define your file name : fakeUser
? Type of your file : .js
✅ The file has been successfully created.
```

```js
// src/generated/fakeUser.js
export const fakeUser = [
  { userId: "user 1" },
  { userId: "user 2" },
  ...{ userId: "user 13" },
];
```

## Custom File Path Configuration

- By default, generated files are created in the `./src/generated directory`. However, you can customize the output directory by modifying the `dummy.config.json file`.
- To set a custom output directory, specify the desired path in the outputDirectory field of your dummy.config.json file. Here’s an example configuration:

```ts
// dummy.config.json
{
  "file": {
    "outputDirectory": "./src/generated"
  }
}

```
