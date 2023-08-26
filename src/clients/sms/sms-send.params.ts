interface SmsSendParams{
  /**
   * An array of sms numbers (up to 100) to send to
   * An sms number to send to (must be in e.164 format)
   */
  destination: string[];
  /**
   * The content of the sms
   */
  content: string;
}
export {SmsSendParams}