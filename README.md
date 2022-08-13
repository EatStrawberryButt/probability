## TODO: README

> This is a tool to help you generate boolean based on probability.

### Getting Started

* **Basic Use**

```typescript
import base from "@hansuhhi-don/probability";
// or import { base } from "@hansuhhi-don/dice";

const result1 = base(0.35);
// will get: false
```

```typescript
const list = { true: 0, false: 0 };

for (let i = 0; i < 10000; i++) {
  if (base(0.35)) list.true++;
  else list.false++;
}
console.log("list: ", list);
// will get: list:  {true: 3529, false: 6471}

```

### API

* **props1: A probability greater than 0 and less than 1**


enjoy😃