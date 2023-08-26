import {AllowedSenders} from "./allowed-senders";
import {Smtp2GoResponse} from "../../request";

interface AllowedSendersResponse extends Smtp2GoResponse {
  data: AllowedSenders;
}

export {AllowedSendersResponse}