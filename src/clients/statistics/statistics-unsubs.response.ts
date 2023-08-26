import {Smtp2GoResponse} from "../../request";

interface StatisticsUnsubsResponse extends Smtp2GoResponse{
  /**
   * The total number of emails send during the last 30 day period
   */
  emails:number;
  /**
   * How many of those emails sent were rejected
   */
  rejects:number;
  /**
   * How many of those rejects were marked as unsubscribes
   */
  unsubscribes:number;
  /**
   * Percentage of emails sent that were marked as unsubscribed
   */
  unsubscribePercent:string;
}
export {StatisticsUnsubsResponse}