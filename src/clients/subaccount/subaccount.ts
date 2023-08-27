interface Subaccount{
  /**
   * The name of the subaccount
   */
  name: string;
  /**
   * The email address of the subaccount
   */
  email: string;
  /**
   * The ID of the subaccount
   */
  id: string;
  /**
   * The plan size the subaccount currently has
   */
  planSize: number;
  /**
   * The number of emails the subaccount has sent in this billing cycle
   */
  planUsed: number;
  /**
   * The number of emails the subaccount has left in this billing cycle
   */
  planRemaining: number;
  /**
   * The current state of the subaccount, one of Active, Closed, Suspended or Expired
   */
  state: 'Active'|'Closed'|'Suspended'|'Expired';
  /**
   * Whether the subaccount currently has a dedicated ip
   */
  dedicatedIp: boolean;
}
export {Subaccount}