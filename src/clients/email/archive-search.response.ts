import {Smtp2GoResponse} from "../../request";
import {Email} from "./email";

interface ArchiveSearchResponse extends Smtp2GoResponse{
  data:{
    /**
     * A string that can be used in a subsequent request to page through results
     */
    continueToken:string;
    /**
     * The number of emails returned
     */
    emailCount: number
    /**
     * A list of email objects
     */
    emails: Email[];
  }
}

export {ArchiveSearchResponse}