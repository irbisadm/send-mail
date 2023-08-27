interface SubaccountUsageParams{
  /**
   *  datetime which defaults to the start of the current month. Timezone is UTC.
   */
  startDate: Date;
  /**
   * datetime which defaults to now. Timezone is UTC.
   */
  endDate: Date;
}
export {SubaccountUsageParams}