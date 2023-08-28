import {Client, Options} from "./clients";

const CLIENT_DEFAULT_OPTIONS: Options = {
  key: "",
  url: "https://api.smtp2go.com/v3",
  timeout: 5000,
}

class Smtp2Go {
  constructor() {}

  client(options: Options): Client {
    const optionsWDefaults = {...CLIENT_DEFAULT_OPTIONS, ...options};
    return new Client(optionsWDefaults);
  }
}

export {Smtp2Go}
