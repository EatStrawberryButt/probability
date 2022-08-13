## TODO: README

> This is a tool to help you generate boolean based on probability.

### Getting Started


1. **baseTwo**
- args: A number greater than 0 and less than 1

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

- args: number[]

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

### API

* **props1: A probability greater than 0 and less than 1**


enjoy😃