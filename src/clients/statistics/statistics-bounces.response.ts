import {Smtp2GoResponse} from "../../request";

interface StatisticsBouncesResponse extends Smtp2GoResponse{
  data:{
    /**
     * The total number of emails send during the last 30 day period
     */
    emails:number;
    /**
     * How many of those emails sent were rejected
     */
    rejects:number;
    /**
     * How many of those rejects were softbounces
     */
    softbounces:number
    /**
     * How many of those emails were hardbounces
     */
    hardbounces:number;
    /**
     * Percentage Of Emails Sent That Were Bounced
     */
    bouncePercent:string
  }
}
export {StatisticsBouncesResponse}