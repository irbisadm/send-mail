import {Smtp2GoResponse} from "../../request";
import {AllowedSenderMode} from "./allowed-sender-mode";

interface AllowedSenderModeResponse extends Smtp2GoResponse {
  data: AllowedSenderMode;
}

export {AllowedSenderModeResponse};