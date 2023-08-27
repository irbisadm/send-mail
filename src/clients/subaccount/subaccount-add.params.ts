interface SubaccountAddParams{
  /**
   * The email address of the subaccount you want to invite
   */
  email: string;
  /**
   * The fullname of the subaccount
   */
  fullname: string;
  /**
   * The number of emails the subaccount is allowed to send each billing cycle, valid options are [2000, 5000, 10000, 20000, 40000, 60000, 80000, 100000, 250000, 500000, 1000000, 2000000, 3000000, 5000000, 10000000]
   */
  limit?: number;
  /**
   * Auto assign a dedicated IP to the subaccount (costs $19/month and the 'limit' must be at least 100,000 )
   */
  dedicatedIp?: boolean;
  /**
   * Deprecated: The parent accounts region is used
   */
  region?: string;
}
export {SubaccountAddParams}