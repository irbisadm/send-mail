import {Smtp2GoResponse} from "../../request";
import {Subaccount} from "./subaccount";

interface SubaccountUsageResponse extends Smtp2GoResponse {
  data: {
    /**
     * An array of all subaccounts with usage during the specified period
     */
    subaccounts: Subaccount[]
    /**
     * The number of records returned
     */
    total_count: number;
  }
}

export {SubaccountUsageResponse}