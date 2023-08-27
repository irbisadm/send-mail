import {Smtp2GoResponse} from "../../request";
import {SmtpUser} from "./smtp-user";

interface SmtpUserListResponse extends Smtp2GoResponse{
  data:{
    results:SmtpUser
  }
}

export {SmtpUserListResponse}