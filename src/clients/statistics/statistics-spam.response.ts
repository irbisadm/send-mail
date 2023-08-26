import {Smtp2GoResponse} from "../../request";

interface StatisticsSpamResponse extends Smtp2GoResponse{
  data:{
    /**
     * The total number of emails send during the last 30 day period
     */
    emails:number;
    /**
     * How many of those emails sent were rejected
     */
    rejects: number;
    /**
     * How many of those rejects were marked as spam
     */
    spams:number;
    /**
     *
     *     Percentage of emails sent that were rejected as spam
     */
    spamPercent:string;
  }
}
export {StatisticsSpamResponse}