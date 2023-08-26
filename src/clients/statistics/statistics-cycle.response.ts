import {Smtp2GoResponse} from "../../request";

interface StatisticsCycleResponse extends Smtp2GoResponse{
  data:{
    /**
     * datetime containing the start of the monthly cycle.
     */
    cycleStart:Date;
    /**
     * datetime containing the end of the monthly cycle.
     */
    cycleEnd:Date;
    /**
     * Number of emails that have been sent during this monthly cycle.
     */
    cycleUsed:number
    /**
     * The remaining email quota in this monthly cycle.
     */
    cycleRemaining:number;
    /**
     * The total number of emails that can be sent during this monthly cycle.
     */
    cycleMax:number;
  }
}
export {StatisticsCycleResponse}