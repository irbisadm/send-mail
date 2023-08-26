import {Smtp2goRequest} from "../request";

abstract class BaseClient {
  constructor(protected readonly request:Smtp2goRequest){}
}

export {BaseClient}