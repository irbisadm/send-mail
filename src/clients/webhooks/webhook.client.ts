import {BaseClient} from "../base.client";
import {Webhook} from "./webhook";
import {WebhookResponse} from "./webhook.response";
import {WebhookRemoveParams} from "./webhook-remove.params";
import {WebhookViewResponse} from "./webhook-view.response";

class WebhookClient extends BaseClient{
  async add(params:Omit<Webhook,'id'>):Promise<WebhookResponse>{
    return this.request.post<WebhookResponse>('/webhook/add', params as unknown as Record<string, unknown>);
  };
  async edit(params:Webhook):Promise<WebhookResponse>{
    return this.request.post<WebhookResponse>('/webhook/edit', params as unknown as Record<string, unknown>);
  };
  async remove(params:WebhookRemoveParams):Promise<WebhookResponse>{
    return this.request.post<WebhookResponse>('/webhook/remove', params as unknown as Record<string, unknown>);
  };
  async view():Promise<WebhookViewResponse>{
    return this.request.post<WebhookViewResponse>('/webhook/view', {});
  };
}
export {WebhookClient};