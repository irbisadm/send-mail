import {SubaccountAddParams} from "./subaccount-add.params";

interface SubaccountEditParams extends Omit<SubaccountAddParams,'region'>{
  /**
   * The ID of the subaccount you want to update
   */
  id: string;
  /**
   * Pass this if you would like to update the email address pass this
   */
  new_email: string;
}
export {SubaccountEditParams}