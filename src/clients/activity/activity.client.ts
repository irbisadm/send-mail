import {BaseClient} from "../base.client";
import {ActivitySearchParams} from "./activity-search.params";
import {ActivitySearchResponse} from "./activity-search.response";

class ActivityClient extends BaseClient {
  async search(params: ActivitySearchParams): Promise<ActivitySearchResponse> {
    return this.request.post<ActivitySearchResponse>('/activity/search', params as Record<string, unknown>);
  }
}

export {ActivityClient}