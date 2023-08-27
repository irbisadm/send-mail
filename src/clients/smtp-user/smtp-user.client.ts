import {BaseClient} from "../base.client";
import {SmtpUserListResponse} from "./smtp-user-list.response";
import {SmtpUserOneParams} from "./smtp-user-one.params";
import {SmtpUser} from "./smtp-user";

class SmtpUserClient extends BaseClient{
  async add(params:SmtpUser):Promise<SmtpUserListResponse>{
    return this.request.post<SmtpUserListResponse>('/users/smtp/add', params as unknown as Record<string, unknown>);
  };
  async edit(params:SmtpUser):Promise<SmtpUserListResponse>{
    return this.request.post<SmtpUserListResponse>('/users/smtp/edit', params as unknown as Record<string, unknown>);
  };
  async remove(params:SmtpUserOneParams):Promise<SmtpUserListResponse>{
    return this.request.post<SmtpUserListResponse>('/users/smtp/remove', params as unknown as Record<string, unknown>);
  };
  async view(params:SmtpUserOneParams):Promise<SmtpUserListResponse>{
    return this.request.post<SmtpUserListResponse>('/users/smtp/view', params as unknown as Record<string, unknown>);
  };
}

export {SmtpUserClient}
