import {BaseClient} from "../base.client";
import {Smtp2GoResponse} from "../../request";
import {SingleSenderEmailAddParams} from "./single-sender-email-add.params";
import {SingleSenderEmailParams} from "./single-sender-email.params";
import {SingleSenderEmailViewResponse} from "./single-sender-email-view.response";

class SingleSenderEmailClient extends BaseClient{
  async add(params:SingleSenderEmailAddParams):Promise<Smtp2GoResponse>{
    return this.request.post<Smtp2GoResponse>('/single_sender_emails/add', params as unknown as Record<string, unknown>);
  };
  async remove(params:SingleSenderEmailParams):Promise<Smtp2GoResponse>{
    return this.request.post<Smtp2GoResponse>('/single_sender_emails/remove', params as unknown as Record<string, unknown>);
  };
  async view(params:SingleSenderEmailParams):Promise<SingleSenderEmailViewResponse>{
    return this.request.post<SingleSenderEmailViewResponse>('/single_sender_emails/view', params as unknown as Record<string, unknown>);
  };
}

export {SingleSenderEmailClient}