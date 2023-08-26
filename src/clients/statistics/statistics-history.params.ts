interface StatisticsHistoryParams{
  /**
   * datetime which defaults to 30 days prior to the current date at midnight. Timezone is UTC.
   */
  endDate: Date;
  /**
   * Either 'email_address' or 'username' - controls the grouping of results.
   */
  groupBy: 'email_address' | 'username';
  /**
   * datetime which defaults to the current date at midnight. Timezone is UTC.
   */
  startDate: Date;
}
export {StatisticsHistoryParams}