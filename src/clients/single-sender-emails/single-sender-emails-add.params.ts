import {SingleSenderEmailsParams} from "./single-sender-emails.params";

interface SingleSenderEmailsAddParams extends SingleSenderEmailsParams{
  /**
   * An optional message to add into the verification email
   */
  message?: string;
}
export {SingleSenderEmailsAddParams}