import {SingleSenderEmailParams} from "./single-sender-email.params";

interface SingleSenderEmailAddParams extends SingleSenderEmailParams{
  /**
   * An optional message to add into the verification email
   */
  message?: string;
}
export {SingleSenderEmailAddParams}