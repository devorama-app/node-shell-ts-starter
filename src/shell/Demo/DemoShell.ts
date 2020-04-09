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
