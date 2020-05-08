# Deno Learning

> Personal learning and practice of deno

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

## Import Module

* Import statements can make use of URLs

  ```txt
  https://deno.land/std/<PATH_TO_MODULE>.ts
  https://deno.land/std@{VERSION}/<PATH_TO_MODULE>.ts
  ```

* Import statements must have a file ending

## Run Test

This will run all files in the working directory that end in `_test` or `.test` with the extension `.js`, `.ts`, `.jsx`, or `.tsx`

```shell
deno test
```
