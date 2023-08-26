import {Smtp2GoResponse} from "../../request";
import {AllowedSendersMode} from "./allowed-senders-mode";

interface AllowedSendersModeResponse extends Smtp2GoResponse {
  data: AllowedSendersMode;
}

export {AllowedSendersModeResponse};