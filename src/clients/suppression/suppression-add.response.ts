import {Smtp2GoResponse} from "../../request";

interface SuppressionAddResponse extends Smtp2GoResponse{
  data:{
    /**
     * True if the email address or domain was added otherwise False
     */
    added: boolean;
    /**
     * The description you gave for suppressing the email or domain from deliveries
     */
    blockDescription: string;
    /**
     * The email address or domain that you attempted to suppress for deliveries
     */
    emailAddress: string;
  }
}
export {SuppressionAddResponse}