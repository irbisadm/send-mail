import {Options} from "../clients";
import {Smtp2GoResponse} from "./smtp2go.response";
import {Smtp2GoError, Smtp2GoErrorResponse} from "./smtp2go.error";
import {toSnakeCase} from "./to-snake-case";
import {toCamelCase} from "./to-camel-case";
import {toStrDate} from "./to-str-date";
import {fromStrDate} from "./from-str-date";

class Smtp2goRequest{
  constructor(private options:Options) {
  }
  async post<T = Smtp2GoResponse >(url:string, body:Record<string, unknown>):Promise<T>{
    const abortController = new AbortController();
    const {signal } = abortController;
    const requestTimeout =  setTimeout(() => abortController.abort(), this.options.timeout);
    const response = await fetch(url,{
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': `__lib_full_name__ (engine v${process.version})`,
      },
      body: JSON.stringify({...this.transformRequest(body), api_key: this.options.key}),
      signal
    });
    clearTimeout(requestTimeout);
    const snakeJsonBody = await response.json() as Record<string, unknown>;
    const jsonBody = this.transformResponse(snakeJsonBody) as unknown as Smtp2GoResponse;
    if(response.status !== 200){
      throw new Smtp2GoError(jsonBody as Smtp2GoErrorResponse);
    }
    return jsonBody as T;
  }

  private transformRequest(req:Record<string, unknown>):Record<string, unknown>{
    return toSnakeCase(toStrDate(req));
  }
  private transformResponse(resp:Record<string, unknown>):Record<string, unknown>{
    return fromStrDate(toCamelCase(resp));
  }
}

export {Smtp2goRequest}