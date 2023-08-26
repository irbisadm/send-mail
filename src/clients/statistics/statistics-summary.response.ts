import {Smtp2GoResponse} from "../../request";

interface StatisticsSummaryResponse extends Smtp2GoResponse{
  data:{
    /**
     * How many of those emails were marked as spam
     */
    spamEmails:number;
    /**
     * datetime containing the start of the monthly cycle
     */
    cycleStart:Date;
    /**
     * datetime containing the end of the monthly cycle
     */
    cycleEnd: Date;
    /**
     * Number of emails that have been sent during this monthly cycle
     */
    cycleUsed:number;
    /**
     * The remaining email quota in this monthly cycle
     */
    cycleRemaining:number;
    /**
     * The total number of emails that can be sent during this monthly cycle
     */
    cycleMax:number;
    /**
     * The total number of emails sent during the last 30 day period
     */
    emailCount:number;
    /**
     * How many of those emails were bounce rejects
     */
    bounceRejects:number;
    /**
     * How many of those rejects were softbounces
     */
    softbounces: number;
    /**
     * How many of those emails were hardbounces
     */
    hardbounces: number;
    /**
     * Percentage of emails sent that were bounced
     */
    BouncePercent:string;
    /**
     * How many of those emails were rejected as spam
     */
    spamRejects: number;
    /**
     * Percentage of emails sent that were rejected as spam
     */
    spamPercent: string;
    /**
     * How many of those rejects were marked as unsubscribes
     */
    unsubscribes: number;
    /**
     * Percentage of emails sent that were marked as unsubscribed
     */
    unsubscribePercent: string;
  }
}
export {StatisticsSummaryResponse}