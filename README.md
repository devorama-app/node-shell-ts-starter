# Node shell TS starter

A starter for create a shell project with shell-ts, node and typescript

## Install

- Clone or download the repository

- Create `.env` file based on `.env.dist`

```node
npm install
```

## Requirements

- node 10+

## Starter content

### Dependencies

- [config](https://github.com/lorenwest/node-config)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [shell-ts](https://github.com/devorama-app/shell-ts)
- [typescript](https://www.npmjs.com/package/typescript)
- [jest](https://www.npmjs.com/package/jest)
- [eslint](https://www.npmjs.com/package/eslint)
- [prettier](https://www.npmjs.com/package/prettier)

### Configuration

- eslint
- prettier
- typescript
- jest for typescript

## Command lines

- `npm run watch` : compile typescript on the fly
- `npm run build` : build projet, compile typescript
- `npm run linter` : check eslint issues
- `npm run test` : start jest tests
- `npm run -- cli` : start a shell script (see below)

## Run Shell script

This starter contains a demo script in `src/shell/Demo/DemoShell.ts`

```ts
import { Shell, ShellInterface } from "shell-ts";

export default class DemoShell extends Shell implements ShellInterface {
  protected requiredOptions: string[] = ["id"];

  public execute(): void {
    // you can get arguments
    console.log({ args: this.getArguments() });

    // you can get an option
    console.log({ id: this.getOption("id") });

    // you can get a config
    console.log({ dbHost: this.getConfig("db.host") });

    // you can write a log only if verbose is enable with option --verbose
    this.verbose("Hello World");
  }
}

```

you can run it like this

```shell
npm run -- cli Demo an-argument --id 3
```

**`--` is necessary to pass options to the script**

output

```
{ args: [ 'an-argument' ] }
{ id: 3 }
{ dbHost: 'db' }
```

If you forget the id option you'll have as an output :

```
MissingOptionException: A required option is missing : id
```

because in your class have

```ts
protected requiredOptions: string[] = ["id"];
```

You can use verbose mode like this

```shell
npm run -- cli Demo an-argument --id 3 --verbose
```

output :

```
{ args: [ 'an-argument' ] }
{ id: 3 }
{ dbHost: 'db' }
Hello World
```

## Create Shell script

Create a new js file : `src/shell/Yolo/YoloShell.ts`

**The folder name must be the same as the file name without the word Shell**

```ts
import { Shell, ShellInterface } from "shell-ts";

export default class YoloShell extends Shell implements ShellInterface {

  public execute(): void {
    console.log('I run my yolo script')
  }
}

```

and run it :

```shell
npm run -- cli Yolo
```

output :

```
I run my yolo script
```

**And read the [shell-ts documentation](https://github.com/devorama-app/shell-ts)**
