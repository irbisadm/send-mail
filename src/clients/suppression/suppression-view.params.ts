interface SuppressionViewParams{
  /**
   * If returned from a request this can be passed to continue paging through the result of the results.
   */
  continueToken?: string;
  /**
   * Check if a specific email address or domain is in the block list.
   */
  emailAddress?: string;
  /**
   * datetime which defaults to 30 days prior to the current date at midnight. Timezone is UTC.
   */
  endDate?: Date;
  /**
   * Indicates if the search should use fuzzy matching on recipients & reasons.
   */
  fuzzy?: boolean;
  /**
   * If passed will limit the page size per call, if extra results are available a 'continue_token' will be returned to be passed in the next request.
   */
  limit?: number;
  /**
   * A reason string to search for.
   */
  reason?: string;
  /**
   * An array of reason strings to search for.
   */
  reasons: string[];
  /**
   * A recipient string to search for.
   */
  recipient: string;
  /**
   * An array of recipient strings to search for.
   */
  recipients: string[];
  /**
   * The direction to sort the results, either 'asc' or 'desc'
   */
  sort: string;
  /**
   * datetime which defaults to the current date at midnight. Timezone is UTC.
   */
  startDate: Date;
  /**
   * If passed restricts the search to a single suppression type 'manual', 'spam', 'unsubscribe', 'bounce' or 'compliance'.
   */
  suppressionType: 'manual'|'spam'|'unsubscribe'|'bounce'|'compliance';
  /**
   * If passed restricts the search to multiple suppression types 'manual', 'spam', 'unsubscribe', 'bounce' or 'compliance'.
   */
  suppressionTypes: ('manual'|'spam'|'unsubscribe'|'bounce'|'compliance')[]
  /**
   * A name, domain, or partial email address, if this is provided, the API call will return only addresses matching this wildcard.
   */
  wildcard: string;
}
export {SuppressionViewParams}