import {AllowedSender} from "./allowed-sender";

interface AllowedSenderMode extends AllowedSender {
  mode: 'whitelist' | 'blacklist' | 'disabled';
}

export {AllowedSenderMode};