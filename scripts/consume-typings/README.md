# Consume typings

Post fact manual test

---

{
  "scripts": {
    "start": "npm install --force&&yarn test",
    "test": "tsc --lib esnext,dom consume-typings.ts&&node consume-typings.js"
  },
  "dependencies": {
    "rambda": "file:./../../../rambda/",
    "rambdax": "file:./../../../rambdax/"
  }
}

    "rambda": "file:./../../../rambda/",

```
    "rambda": "https://github.com/selfrefactor/rambda#7.0.0-alpha",
    "rambdax": "https://github.com/selfrefactor/rambdax#8.0.0-alpha",
```
