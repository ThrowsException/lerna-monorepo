# Monorepo example

An example serverless mono repo showing shared packages, independent deployments and builds

## Getting Started

```bash
npm i -g lerna serverless
lerna bootstrap
```

`lerna` and `serverless` are added as devdependencies so that builds work

### Why Typescript

Aside from the fact I think all modren JS should use some kind of type system I think its particularly important in the sense of a monorepo where packages will be updated across projects that any changes to types or methods signatures should trigger _compile_ time errors and not runtime errors. (A google i/o conference had a really good talk on this but I can't remember/find it.)

### Doing things

#### Adding packages

`lerna add` is your new `npm i`.

```bash
# add our logging module to the hello service
lerna add logger --scope=hello
```

without the `--scope` lerna would add it to every package
