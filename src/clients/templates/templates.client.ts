import {BaseClient} from "../base.client";
import {TemplateIdParams} from "./template-id.params";
import {Smtp2GoResponse} from "../../request";
import {TemplateResponse} from "./template.response";
import {Template} from "./template";
import {TemplateEditParams} from "./template-edit.params";
import {TemplateSearchResponse} from "./template-search.response";
import {TemplateSearchParams} from "./template-search.params";

class TemplatesClient extends BaseClient{
  async add(params:Template):Promise<TemplateResponse>{
    return this.request.post<TemplateResponse>('/template/add', params as unknown as Record<string, unknown>);
  };
  async delete(params:TemplateIdParams):Promise<Smtp2GoResponse>{
    return this.request.post<TemplateResponse>('/template/delete', params as unknown as Record<string, unknown>);
  };
  async edit(params:TemplateEditParams):Promise<TemplateResponse>{
    return this.request.post<TemplateResponse>('/template/edit', params as unknown as Record<string, unknown>);
  };
  async search(params:TemplateSearchParams):Promise<TemplateSearchResponse>{
    return this.request.post<TemplateSearchResponse>('/template/search', params as unknown as Record<string, unknown>);
  };
  async view(params:TemplateIdParams):Promise<TemplateResponse>{
    return this.request.post<TemplateResponse>('/template/view', params as unknown as Record<string, unknown>);
  };
}

export {TemplatesClient}
