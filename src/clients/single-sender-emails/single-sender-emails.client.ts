import {BaseClient} from "../base.client";
import {Smtp2GoResponse} from "../../request";
import {SingleSenderEmailsAddParams} from "./single-sender-emails-add.params";
import {SingleSenderEmailsParams} from "./single-sender-emails.params";
import {SingleSenderEmailsViewResponse} from "./single-sender-emails-view.response";

class SingleSenderEmailsClient extends BaseClient{
  async add(params:SingleSenderEmailsAddParams):Promise<Smtp2GoResponse>{
    return this.request.post<Smtp2GoResponse>('/single_sender_emails/add', params as unknown as Record<string, unknown>);
  };
  async remove(params:SingleSenderEmailsParams):Promise<Smtp2GoResponse>{
    return this.request.post<Smtp2GoResponse>('/single_sender_emails/remove', params as unknown as Record<string, unknown>);
  };
  async view(params:SingleSenderEmailsParams):Promise<SingleSenderEmailsViewResponse>{
    return this.request.post<SingleSenderEmailsViewResponse>('/single_sender_emails/view', params as unknown as Record<string, unknown>);
  };
}

export {SingleSenderEmailsClient}