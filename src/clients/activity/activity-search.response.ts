import {Smtp2GoResponse} from "../../request";
import {ActivityEvent} from "./activity-event";

interface ActivitySearchResponse extends Smtp2GoResponse {
  data: {
    events: ActivityEvent[]
    totalEvents: number,
    continueToken: string
  }
}

export {ActivitySearchResponse}