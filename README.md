# Dummy Array Generator

- Generates dummyArray based on the provided template and repetition settings
- Note: Currently a work in progress 🌱

## Quick Usage

```ts
// 1) string
genDummy({ template: "this test is {i}", time: 3 });

// 2) object
genDummy({
  template: `{name:'Lee', age:{i}, location:'Seoul'}`,
  time: 3,
  type: "object",
});
```
