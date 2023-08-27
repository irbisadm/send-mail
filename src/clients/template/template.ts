interface Template{
  /**
   * The name of the template
   */
  templateName: string;
  /**
   * The id of the template
   */
  id: string;
  /**
   * The email subject of the template
   */
  subject: string;
  /**
   * The HTML body text of the email template
   */
  htmlBody: string;
  /**
   * The text body of the email template
   */
  textBody: string;
  /**
   * The variables to use with this template
   */
  templateVariables: Record<string, unknown>;
  /**
   * The tags to associate with this template
   */
  tags: string[]
}

export {Template}