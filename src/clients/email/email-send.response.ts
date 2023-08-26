import {Smtp2GoResponse} from "../../request";

interface EmailSendResponse extends Smtp2GoResponse{
  data:{
    /**
     * The number of emails that were successfully sent.
     */
    succeeded:number;
    /**
     * The number of emails that failed to be sent
     */
    failed:number
    /**
     * Any failures will be listed here
     */
    failures:string[]
    /**
     * The email ID generated if successfully sent
     */
    email_id:string
  }
}
export {EmailSendResponse};