import {AllowedSender} from "./allowed-sender";
import {Smtp2GoResponse} from "../../request";

interface AllowedSenderResponse extends Smtp2GoResponse {
  data: AllowedSender;
}

export {AllowedSenderResponse}