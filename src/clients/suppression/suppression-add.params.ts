interface SuppressionAddParams{
  /**
   * The description given for suppressing the email or domain from deliveries
   */
  blockDescription: string;
  /**
   * The email address or domain you would like to suppress from deliveries
   */
  emailAddress: string;
}
export {SuppressionAddParams}