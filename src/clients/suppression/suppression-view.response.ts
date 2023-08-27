import {Smtp2GoResponse} from "../../request";

interface SuppressionViewResponse extends Smtp2GoResponse {
  data: {
    continueToken: string;
    /**
     * An array of suppression results
     */
    results: {
      /**
       * The description given for why the email or domain was suppressed
       */
      blockDescription: string;
      /**
       * Complaint string if any was lodged
       */
      complaint: string;
      /**
       * An email address or domain matching the search criteria
       */
      emailAddress: string;
      /**
       * String outlining why the email address or domain was blocked one of
       */
      reason: 'spam' | 'bounce' | 'unsubscribe' | 'manual';
      subject: string;
      /**
       * Timestamp when this email or domain was blocked
       */
      timestamp: string;
    }
    totalResults: number;
  }
}

export {SuppressionViewResponse}