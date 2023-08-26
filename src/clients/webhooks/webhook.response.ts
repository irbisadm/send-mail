import {Smtp2GoResponse} from "../../request";
import {Webhook} from "./webhook";

interface WebhookResponse extends Smtp2GoResponse{
  data: Webhook;
}

export {WebhookResponse}