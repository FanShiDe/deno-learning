# Deno

> A secure runtime for JavaScript and TypeScript

## Introduction & Comparison

Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

### Difference with Node.js

* Node.js is written in C++; Deno is written in Rust

* Event-Loop: Node.js use libuv; Deno use [Tokio library](https://github.com/tokio-rs/tokio)

* The dependency manager: Node.js use package.json and NPM

* Dependency folder: Deno use global cache folder(It defaults to the system's cache directory, also can be specified by DENO_DIR); Node.js use node_modules in every project

* import module: Deno support ES Moudule syntax, Node.js use requre() which is CommonJS syntax; Deno need to specify ext

* specific permissions, security

* GYP

* One delivrable, one executable: deno bundle, deno compile

* ecosystem

* Deno is compatible with Browser

* Deno provides built-in tooling like unit testing, code formatting, and linting to improve developer experience.

[10 Things I Regret About Node.js](https://www.youtube.com/watch?v=M3BM9TB-8yA)

### Benchmark

* 100 concurrent connections

|Name|version|AVG req/sec|
|---|---|---|---|
|node.http|12.16.3|47969.2|
|deno.http|1.0.0|47376|
|deno.http|1.1.0|46953.7|
|node.http|14.2.0|44409|

* 10 concurrent connections

|Name|version|AVG req/sec|
|---|---|---|---
|node.http|12.16.3|49926.69|
|node.http|14.2.0|45345.33|
|deno.http|1.1.0|34806.79|
|deno.http|1.0.0|34742.37|

## Setup

### Install

```shell
# install
curl -fsSL https://deno.land/x/install/install.sh | sh
## or
brew install deno

# update
deno upgrade
```

## Run

### Access

Deno uses command-line options to explicitly allow access to different parts of the system

* environment access
* network access
* file system read/write access
* running a subprocess

### Basic mode

```shell
deno run {local filepath}
# or
deno run {remote url}
```

### Watch mode

> like nodemon, will auto restart server if file changes in watching dirs

First, need to install `denon`, if occur error, try to update your deno and then try install again

```shell
deno install --unstable --allow-read --allow-run -f https://deno.land/x/denon/denon.ts
```

Then, touch a local configuration files for denon

```json
{
  "files": [
    "./example/server.ts",
    "./example/static_server.ts"
  ],
  "quiet": false,
  "debug": true,
  "fullscreen": true,
  "extensions": [
    ".js",
    ".ts",
    ".py",
    ".json"
  ],
  "interval": 500,
  "watch": [
    "./"
  ],
  "deno_args": [
    "--allow-net",
    "--allow-read",
    "--import-map=import-map.json"
  ],
  "scripts": {
    "start_static": {
      "cmd": "./example/static_server.ts",
      "desc": "run static server"
    },
    "start": {
      "cmd": "./example/server.ts",
      "desc": "run server"
    },
    "test": {
      "cmd": "deno test",
      "desc": "exec test"
    }
  },
  "execute": {
    ".js": [
      "deno",
      "run"
    ],
    ".ts": [
      "deno",
      "run"
    ],
    ".py": [
      "python"
    ]
  },
  "allow": [
    "net",
    "read"
  ],
  "fmt": false,
  "unstable": true,
  "test": true
}
```

Finally, run in watching mode

```shell
denon -c {configuration file path}
```

## Library

* [Standard Library](https://github.com/denoland/deno/tree/master/std)
A standard set of high quality code, which are reviewed by the Deno core team

* [Third Party Library](https://deno.land/x#info)

* Custom Local library

### Import Module

* Import statements can make use of URLs

  ```typescript
  # standard library
  https://deno.land/std/<PATH_TO_MODULE>.ts
  https://deno.land/std@{VERSION}/<PATH_TO_MODULE>.ts
  ```

* Import statements must have a file ending

## Run Test

This will run all files in the working directory that end in `_test` or `.test` with the extension `.js`, `.ts`, `.jsx`, or `.tsx`

```shell
deno test
```

## Conclusion

Deno successfully removes many of the drawbacks from Node.js development

Hope it's a better Node.js

It may not com replace Node.js

## Reference

[Deno 1.0: What you need to know](https://blog.logrocket.com/deno-1-0-what-you-need-to-know/)

[Deno, first approach](https://dev.to/lsagetlethias/deno-first-approach-4d0)

[Deno 内部代码将停用 TypeScript，并公布五项具体理由](https://www.infoq.cn/article/U72qTZtGaZTTFAzZiHbZ)

[Performance aspect of Deno vs. Node](https://dev.to/gjuoun/perfomance-aspect-of-deno-vs-node-js-4dke)
