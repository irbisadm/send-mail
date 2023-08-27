import {Smtp2GoResponse} from "../../request";

interface SuppressionRemoveResponse extends Smtp2GoResponse{
  data:{
    /**
     * An array of suppression removal results
     */
    suppressions: {
      /**
       * The email address or domain that you attempted to remove from your suppressions
       */
      emailAddress: string;
      /**
       * The block type that you attempted to remove for the given email or domain
       */
      reason: string;
      /**
       * True if the email address was removed from your suppressions otherwise False
       */
      removed: boolean;
    }
  }
}
export {SuppressionRemoveResponse}