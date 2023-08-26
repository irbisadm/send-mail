import {Smtp2GoResponse} from "../../request";
import {Email} from "./email";

interface ArchiveEmailResponse extends Smtp2GoResponse{
  data:Email;
}

export {ArchiveEmailResponse}