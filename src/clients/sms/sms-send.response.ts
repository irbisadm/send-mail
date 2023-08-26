import {Smtp2GoResponse} from "../../request";

interface SmsSendResponse extends Smtp2GoResponse{
  data: {
    /**
     * The number of sms' that were submitted
     */
    totalSent: number;
    /**
     * The status of the sms'
     */
    statuses: Record<string, unknown>
  }
}

export {SmsSendResponse}