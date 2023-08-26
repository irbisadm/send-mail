import {BaseClient} from "../base.client";
import {AllowedSender} from "./allowed-sender";
import {AllowedSenderModeResponse} from "./allowed-sender-mode.response";
import {AllowedSenderResponse} from "./allowed-sender.response";
import {AllowedSenderMode} from "./allowed-sender-mode";

class AllowedSenderClient extends BaseClient {
  async add(params: AllowedSender): Promise<AllowedSenderModeResponse> {
    return this.request.post<AllowedSenderModeResponse>('/allowed_senders/add', params as unknown as Record<string, unknown>);
  };

  async remove(params: AllowedSender): Promise<AllowedSenderResponse> {
    return this.request.post<AllowedSenderResponse>('/allowed_senders/remove', params as unknown as Record<string, unknown>);
  };

  async update(params: AllowedSenderMode): Promise<AllowedSenderModeResponse> {
    return this.request.post<AllowedSenderModeResponse>('/allowed_senders/update', params as unknown as Record<string, unknown>);
  };

  async view(): Promise<AllowedSenderModeResponse> {
    return this.request.post<AllowedSenderModeResponse>('/allowed_senders/view', {});
  } ;
}

export {AllowedSenderClient}