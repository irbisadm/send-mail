interface SmtpUser{
  /**
   * The username for this user
   */
  username: string;
  /**
   * The password for this user when sending email.
   */
  emailPassword: string;
  /**
   * Whether or not this user can send email.
   */
  sendingAllowed: boolean;
  /**
   * Whether this user has a custom rate limit.
   */
  customRatelimit: boolean;
  /**
   * If custom_ratelimit is true, how many emails this user can send in the period specified in custom_ratelimit_period.
   */
  customRatelimitValue: number;
  /**
   * If custom_ratelimit is true, the period in minutes in which the user will be limited to the number of emails specified in custom_ratelimit_value.
   */
  customRatelimitPeriod: string;
  /**
   * Any comment or additional information about this user.
   */
  description: string;
  /**
   * Are custom feedback inserts specified
   */
  feedbackEnabled: boolean;
  /**
   * The domain to insert into the custom feedback links
   */
  feedbackDomain: string;
  /**
   * HTML Content to use in text/html email body
   */
  feedbackHtml: string;
  /**
   * Text Content to use in text/plain email body
   */
  feedbackText: string;
  /**
   * Is archiving enabled for this user
   */
  archiveEnabled: boolean;
  /**
   * Is open tracking enabled for this user
   */
  openTrackingEnabled: boolean;
  clickTrackingEnabled: boolean;
  /**
   * BCC Address for this user key
   */
  auditEmail: string;
  /**
   * Mechanism used for bounce notifications
   */
  bounceNotifications: string;
}

export {SmtpUser}