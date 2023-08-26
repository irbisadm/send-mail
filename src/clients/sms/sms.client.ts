import {BaseClient} from "../base.client";
import {SmsSendParams} from "./sms-send.params";
import {SmsViewParams} from "./sms-view.params";
import {SmsSendResponse} from "./sms-send.response";
import {SmsViewResponse} from "./sms-view.response";

class SmsClient extends BaseClient{
  async send(params:SmsSendParams):Promise<SmsSendResponse>{
    return this.request.post<SmsSendResponse>('/sms/send', params as unknown as Record<string, unknown>);
  };
  async viewReceived(params:SmsViewParams):Promise<SmsViewResponse>{
    return this.request.post<SmsViewResponse>('/sms/view-received', params as unknown as Record<string, unknown>);
  };
}
export {SmsClient}