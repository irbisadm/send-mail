import {BaseClient} from "../base.client";
import {Smtp2GoResponse} from "../../request";
import {SubaccountResponse} from "./subaccount.response";
import {SubaccountSearchResponse} from "./subaccount-search.response";
import {SubaccountUsageResponse} from "./subaccount-usage.response";
import {SubaccountUsageParams} from "./subaccount-usage.params";
import {SubaccountSearchParams} from "./subaccount-search.params";
import {SubaccountIdParams} from "./subaccount-id.params";
import {SubaccountReinviteParams} from "./subaccount-reinvite.params";
import {SubaccountAddParams} from "./subaccount-add.params";
import {SubaccountEditParams} from "./subaccount-edit.params";

class SubaccountClient extends BaseClient{
  async add(params:SubaccountAddParams):Promise<SubaccountResponse>{
    return this.request.post<SubaccountResponse>('/subaccount/add', params as unknown as Record<string, unknown>);
  };
  async close(params:SubaccountIdParams):Promise<Smtp2GoResponse>{
    return this.request.post<Smtp2GoResponse>('/subaccount/close', params as unknown as Record<string, unknown>);
  };
  async edit(params:SubaccountEditParams):Promise<SubaccountResponse>{
    return this.request.post<SubaccountResponse>('/subaccount/edit', params as unknown as Record<string, unknown>);
  };
  async reinvite(params:SubaccountReinviteParams):Promise<Smtp2GoResponse>{
    return this.request.post<Smtp2GoResponse>('/subaccount/reinvite', params as unknown as Record<string, unknown>);
  };
  async reopen(params:SubaccountIdParams):Promise<Smtp2GoResponse>{
    return this.request.post<Smtp2GoResponse>('/subaccount/reopen', params as unknown as Record<string, unknown>);
  };
  async search(params:SubaccountSearchParams):Promise<SubaccountSearchResponse>{
    return this.request.post<SubaccountSearchResponse>('/subaccount/search', params as unknown as Record<string, unknown>);
  };
  async usage(params:SubaccountUsageParams):Promise<SubaccountUsageResponse>{
    return this.request.post<SubaccountUsageResponse>('/subaccount/usage', params as unknown as Record<string, unknown>);
  };
}
export {SubaccountClient}
