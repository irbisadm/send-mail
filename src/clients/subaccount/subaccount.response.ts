import {Smtp2GoResponse} from "../../request";
import {Subaccount} from "./subaccount";

interface SubaccountResponse extends Smtp2GoResponse{
  data: Subaccount
}

export {SubaccountResponse}