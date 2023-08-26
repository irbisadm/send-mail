interface Template{
  /**
   * The name of the template
   */
  template_name: string;
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
  html_body: string;
  /**
   * The text body of the email template
   */
  text_body: string;
  /**
   * The variables to use with this template
   */
  template_variables: Record<string, unknown>;
  /**
   * The tags to associate with this template
   */
  tags: string[]
}

export {Template}