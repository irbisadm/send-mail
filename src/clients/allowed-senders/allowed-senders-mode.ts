import {AllowedSenders} from "./allowed-senders";

interface AllowedSendersMode extends AllowedSenders {
  mode: 'whitelist' | 'blacklist' | 'disabled';
}

export {AllowedSendersMode};