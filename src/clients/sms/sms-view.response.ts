import {Smtp2GoResponse} from "../../request";

interface SmsViewResponse extends Smtp2GoResponse{
  data:{
    messages:{
      /**
       * The SMS sender number.
       */
      source_address: string;
      /**
       * The SMS recipient number.
       */
      destination_address: string;
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