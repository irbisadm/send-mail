import {Smtp2GoResponse} from "../../request";

interface StatisticsHistoryResponse extends Smtp2GoResponse{
  data:{
    /**
     * How many emails were sent in the last 30 day period
     */
    count:number;
    /**
     * An array of email history records
     */
    history: {
      used: number;
      bytecount: number;
      avgsize:number;
      emailAddress:number;
      username:number;
      lastip:number;
    }[]
  }
}
export {StatisticsHistoryResponse}