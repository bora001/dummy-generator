
# Dummy Array Generator

- Generates dummyArray based on the provided template and repetition settings
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
// [ { name: 'Lee', age: 1, location: 'Seoul' },
//  { name: 'Lee', age: 2, location: 'Seoul' },
//  { name: 'Lee', age: 3, location: 'Seoul' } ]
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
? Do you want to export the dummy array as a file? yes
? what is the type of the array? string
? what is the name of the array? fakeArticle
? Enter your template article {i}
? How many times do you want to repeat? 7
? define your file name fakeArticle
? choose type of your file .js
✅ The file has been successfully created.
```
```js
// src/generated/fakeArticle.js
export const fakeArticle = [ "article 1", "article 2", "article 3", "article 4", "article 5", "article 6", "article 7"];
```





### 2) Object

```sh
🟢 Welcome to dummy-array-generator 🌱
? Do you want to export the dummy array as a file? yes
? what is the type of the array? object
? what is the name of the array? fakeUser
? Enter the key of the object userId
? Enter the value of the object user {i}
? How many times do you want to repeat? 13
? define your file name fakeUser
? choose type of your file .js
✅ The file has been successfully created.
```

```js
// src/generated/fakeUser.js
export const fakeUser = [ { userId: "user 1" }, { userId: "user 2" }, ... { userId: "user 13" } ];
```

