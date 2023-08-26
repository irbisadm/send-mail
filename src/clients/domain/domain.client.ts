import {BaseClient} from "../base.client";
import {DomainAddParams} from "./domain-add.params";
import {DomainResponse} from "./domain.response";
import {DomainParams} from "./domain.params";
import {DomainVerifyParams} from "./domain-verify.params";
import {DomainSubdomainParams} from "./domain-subdomain.params";

class DomainClient extends BaseClient{
  async add(params:DomainAddParams):Promise<DomainResponse>{
    return this.request.post<DomainResponse>('/domain/add', params as unknown as Record<string, unknown>);
  };
  async remove(params:DomainParams):Promise<DomainResponse>{
    return this.request.post<DomainResponse>('/domain/remove', params as unknown as Record<string, unknown>);
  };
  async returnpath(params:DomainSubdomainParams):Promise<DomainResponse>{
    return this.request.post<DomainResponse>('/domain/returnpath', params as unknown as Record<string, unknown>);
  };
  async tracking(params:DomainSubdomainParams):Promise<DomainResponse>{
    return this.request.post<DomainResponse>('/domain/tracking', params as unknown as Record<string, unknown>);
  };
  async verify(params:DomainVerifyParams):Promise<DomainResponse>{
    return this.request.post<DomainResponse>('/domain/verify', params as unknown as Record<string, unknown>);
  };
  async view(params:DomainParams):Promise<DomainResponse>{
    return this.request.post<DomainResponse>('/domain/view', params as unknown as Record<string, unknown>);
  };
}

export {DomainClient}