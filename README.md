# Dummy Array Generator

- Generates dummyArray based on the provided template and repetition settings
- Note: Currently a work in progress 🌱

## Quick Usage

1. string

```ts
genDummy({ template: "this test is {i}", time: 3 });

// returns [ 'this test is 1', 'this test is 2', 'this test is 3' ]
```

2. object

```ts
genDummy({
  template: `{name:'Lee', age:{i}, location:'Seoul'}`,
  time: 3,
  type: "object",
});

// returns
// [ { name: 'Lee', age: 1, location: 'Seoul' },
//  { name: 'Lee', age: 2, location: 'Seoul' },
//  { name: 'Lee', age: 3, location: 'Seoul' } ]
```
