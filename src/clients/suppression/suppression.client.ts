import {BaseClient} from "../base.client";
import {SuppressionRemoveParams} from "./suppression-remove.params";
import {SuppressionAddParams} from "./suppression-add.params";
import {SuppressionViewParams} from "./suppression-view.params";
import {SuppressionAddResponse} from "./suppression-add.response";
import {SuppressionRemoveResponse} from "./suppression-remove.response";
import {SuppressionViewResponse} from "./suppression-view.response";

class SuppressionClient extends BaseClient{
  async add(params:SuppressionAddParams):Promise<SuppressionAddResponse>{
    return this.request.post<SuppressionAddResponse>('/suppression/add', params as unknown as Record<string, unknown>);
  };
  async remove(params:SuppressionRemoveParams):Promise<SuppressionRemoveResponse>{
    return this.request.post<SuppressionRemoveResponse>('/suppression/remove', params as unknown as Record<string, unknown>);
  };
  async view(params:SuppressionViewParams):Promise<SuppressionViewResponse>{
    return this.request.post<SuppressionViewResponse>('/suppression/view', params as unknown as Record<string, unknown>);
  };
}
export {SuppressionClient};