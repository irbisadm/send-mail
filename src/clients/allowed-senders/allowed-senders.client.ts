import {BaseClient} from "../base.client";
import {AllowedSenders} from "./allowed-senders";
import {AllowedSendersModeResponse} from "./allowed-senders-mode.response";
import {AllowedSendersResponse} from "./allowed-senders.response";
import {AllowedSendersMode} from "./allowed-senders-mode";

class AllowedSendersClient extends BaseClient {
  async add(params: AllowedSenders): Promise<AllowedSendersModeResponse> {
    return this.request.post<AllowedSendersModeResponse>('/allowed_senders/add', params as unknown as Record<string, unknown>);
  };

  async remove(params: AllowedSenders): Promise<AllowedSendersResponse> {
    return this.request.post<AllowedSendersResponse>('/allowed_senders/remove', params as unknown as Record<string, unknown>);
  };

  async update(params: AllowedSendersMode): Promise<AllowedSendersModeResponse> {
    return this.request.post<AllowedSendersModeResponse>('/allowed_senders/update', params as unknown as Record<string, unknown>);
  };

  async view(): Promise<AllowedSendersModeResponse> {
    return this.request.post<AllowedSendersModeResponse>('/allowed_senders/view', {});
  } ;
}

export {AllowedSendersClient}