import {Smtp2GoResponse} from "../../request";
import {Webhook} from "./webhook";

interface WebhookViewResponse extends Smtp2GoResponse{
  data:{
    webhooks:Webhook[]
  }
}
export {WebhookViewResponse}