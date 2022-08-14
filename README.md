## TODO: README

> This is a tool to help you generate boolean based on probability.

### Getting Started


1. **baseTwo**
- @param: A number greater than 0 and less than 1
- @return boolean

**Basic usage**

```typescript
import { baseTwo } from "@hansuhhi-don/probability";

const result1 = base(0.35);
// will get: false
```

```typescript
import { baseTwo } from "@hansuhhi-don/probability";

const list = { true: 0, false: 0 };

for (let i = 0; i < 10000; i++) {
  if (base(0.35)) list.true++;
  else list.false++;
}
console.log("list: ", list);
// will get: list:  {true: 3529, false: 6471}

```

2. baseMore

- @param: number[]
- @return number

**Basic usage**

```typescript
import { baseMore } from "@hansuhhi-don/probability";

let a = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
};
for (let i = 0; i < 10000; i++) {
  const number = baseMore(0.1, 0.2, 0.2, 0.5);
  a[number]++;
}
console.log(a);
// will get: {0: 953, 1: 2050, 2: 1993, 3: 5004}
```
**does not have to sum to 1**

```typescript
import { baseMore } from "@hansuhhi-don/probability";

let a = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
};
for (let i = 0; i < 10000; i++) {
  const number = baseMore(0.1, 0.2);
  a[number]++;
}
console.log(a);

// will get {0: 963, 1: 2023, 2: 7014, 3: 0}
```

```typescript
import { baseMore } from "@hansuhhi-don/probability";

let a = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
};
for (let i = 0; i < 10000; i++) {
  const number = baseMore(0.1, 0.2, 0.95);
  a[number]++;
}
console.log(a);

// will get {0: 1006, 1: 1990, 2: 7004, 3: 0}
```

3. baseObject

- @param: { [key in string]: number }
- @return: keyof typeof param (If you need type support, you need to add the T)

```typescript

let list = { a: 0, b: 0, undefined: 0 };

const probability = { a: 0.2, b: 0.3 };
for (let i = 0; i < 1000; i++) {
  list[`${baseObject<typeof probability>(probability)}`]++;
}

console.log(list);
// will get {a: 203, b: 279, undefined: 518}
```

enjoy😃