# Deno

> A secure runtime for JavaScript and TypeScript

## Introduction & Comparison

Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

### Difference with Node.js

* Node.js is written in C++; Deno is written in Rust

* Event-Loop: Node.js use libuv; Deno use [Tokio library](https://github.com/tokio-rs/tokio)

* The dependency manager: Node.js use package.json and NPM

* Dependency folder: Deno use global cache folder(~/.deno/src by default, also can be changed by setting DENO_DIR); Node.js use node_modules in every project

* import module: Deno support ES Moudule syntax, Node.js use requre() which is CommonJS syntax; Deno need to specify ext

* specific permissions, security

* GYP

* One delivrable, one executable: deno bundle, deno compile

* ecosystem

[10 Things I Regret About Node.js](https://www.youtube.com/watch?v=M3BM9TB-8yA)

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
    "server.ts"
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
    "--import-map=import-map.json"
  ],
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
  "fmt": false,
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

Deno successfully removes many of the drawbacks from JavaScript development

Hope it's a better Node.js

It may not com replace Node.js

## Reference

https://blog.logrocket.com/deno-1-0-what-you-need-to-know/
https://www.infoq.cn/article/U72qTZtGaZTTFAzZiHbZ
