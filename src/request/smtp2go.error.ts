import {Smtp2GoResponse} from "./smtp2go.response";

interface Smtp2GoErrorResponse extends Smtp2GoResponse {
  body: {
    error: string;
    error_code: string;
  }
}
class Smtp2GoError extends Error {
  /**
   * An error string
   */
  error:string;
  /**
   * An API Error Code string
   */
  errorCode:string
  /**
   * A Unique ID for this request
   */
  requestId :string;
  constructor(response:Smtp2GoErrorResponse){
      const {request_id: requestId} = response;
      const {error, error_code: errorCode} = response.body;
      super(`${errorCode}: ${error} (${requestId})`);
      this.error = error;
      this.errorCode = errorCode;
      this.requestId = requestId;
  }
}

export {Smtp2GoError, Smtp2GoErrorResponse}