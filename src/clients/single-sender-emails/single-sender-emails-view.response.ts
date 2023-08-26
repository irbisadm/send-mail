import {Smtp2GoResponse} from "../../request";

interface SingleSenderEmailsViewResponse extends Smtp2GoResponse{
  data:{
    /**
     * A list of senders that were returned by the last action
     */
    senders: {
      /**
       * The email address of the sender
       */
      email_address: string;
      /**
       * A flag indicating whether this email address has been verified
       */
      verified: boolean;
    }[]
  }
}
export {SingleSenderEmailsViewResponse}