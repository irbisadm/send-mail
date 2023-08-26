import {BaseClient} from "../base.client";
import {StatisticsHistoryParams} from "./statistics-history.params";
import {StatisticsUsernameParams} from "./statistics-username.params";
import {StatisticsBouncesResponse} from "./statistics-bounces.response";
import {StatisticsCycleResponse} from "./statistics-cycle.response";
import {StatisticsHistoryResponse} from "./statistics-history.response";
import {StatisticsSpamResponse} from "./statistics-spam.response";
import {StatisticsSummaryResponse} from "./statistics-summary.response";
import {StatisticsUnsubsResponse} from "./statistics-unsubs.response";

class StatisticsClient extends BaseClient{
  async emailBounces(params:StatisticsUsernameParams):Promise<StatisticsBouncesResponse>{
    return this.request.post<StatisticsBouncesResponse>('/stats/email_bounces', params as unknown as Record<string, unknown>);
  };
  async emailCycle():Promise<StatisticsCycleResponse>{
    return this.request.post<StatisticsCycleResponse>('/stats/email_cycle', {});
  };
  async emailHistory(params:StatisticsHistoryParams):Promise<StatisticsHistoryResponse>{
    return this.request.post<StatisticsHistoryResponse>('/stats/email_history', params as unknown as Record<string, unknown>);
  };
  async emailSpam(params:StatisticsUsernameParams):Promise<StatisticsSpamResponse>{
    return this.request.post<StatisticsSpamResponse>('/stats/email_spam', params as unknown as Record<string, unknown>);
  };
  async emailSummary(params:StatisticsUsernameParams):Promise<StatisticsSummaryResponse>{
    return this.request.post<StatisticsSummaryResponse>('/stats/email_summary', params as unknown as Record<string, unknown>);
  };
  async emailUnsubs(params:StatisticsUsernameParams):Promise<StatisticsUnsubsResponse>{
    return this.request.post<StatisticsUnsubsResponse>('/stats/email_unsubs', params as unknown as Record<string, unknown>);
  };
}
export {StatisticsClient}
