interface ArchiveSearchParams{
  /**
   * datetime which defaults to current date at midnight. The range will be inclusive of start_date and exclusive of end_date. Timezone is UTC.
   */
  start_date?: Date;
  /**
   * datetime which defaults to now. Timezone is UTC.
   */
  end_date?:Date;
  /**
   * The maximum number of emails to return. This defaults to 5,000, which is also the maximum value allowed.
   */
  limit?: number;
  /**
   * If passed only return email details sent by this user
   */
  username?: string;
  /**
   * If passed only return emails with this recipient
   */
  recipient?: string;
  /**
   * If passed only return emails with this sender
   */
  sender?: string;
  /**
   * If passed only return emails with this envelope_from
   */
  envelope_from?: string;
  /**
   * If passed only return emails with this subject
   */
  subject?: string;
  /**
   * If passed only return emails with this substring in the headers
   */
  headers: string;
  /**
   * Pass this if the result of this query returns it, used to continue the previous search if too many results were found.
   */
  continue_token: string;
}
export {ArchiveSearchParams}