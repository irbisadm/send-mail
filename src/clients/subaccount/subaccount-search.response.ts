import {Smtp2GoResponse} from "../../request";
import {Subaccount} from "./subaccount";

interface SubaccountSearchResponse extends Smtp2GoResponse{
  data:{
    /**
     * If present can be passed to the call again in order to retrieve the next page of results
     */
    continueToken: string
    /**
     * A list of subaccounts matching the search criteria
     */
    subaccounts: Subaccount[]
    totalCount:number;
  }
}

export {SubaccountSearchResponse}