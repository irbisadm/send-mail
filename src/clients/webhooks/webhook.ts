interface Webhook{
  /**
   * The id of the webhook
   */
  id: number;
  /**
   * The URL of the webhook
   */
  url:string;
  /**
   * The events the webhook will recieve
   */
  events:string[];
  /**
   * The headers the webhook will recieve
   */
  headers: string[];
  /**
   * The usernames events will be recieved for
   */
  usernames:string[];
}
export {Webhook}