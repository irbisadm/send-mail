import {Smtp2GoResponse} from "../../request";

interface SmsViewResponse extends Smtp2GoResponse{
  data:{
    messages:{
      /**
       * The SMS sender number.
       */
      sourceAddress: string;
      /**
       * The SMS recipient number.
       */
      destinationAddress: string;
      /**
       * Message timestamp.
       */
      timestamp: string;
      /**
       * Message content
       */
      content: string;
    }[]
  }
}
export {SmsViewResponse}