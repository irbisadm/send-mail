import {EmailFile} from "./email-file";

interface EmailSendParams{
  /**
   * The email address to send from, eg. "john@example.com"
   */
  sender: string;
  /**
   * An array of email addresses (up to 100) to send to, eg. ["john@example.com", "jane@example.com"]
   * An email address to send to.
   */
  to: string[];
  /**
   * An array of email addresses (up to 100) to cc to, eg. ["john@example.com", "jane@example.com"]
   * An email address to cc to.
   */
  cc: string[];
  /**
   * An array of email addresses (up to 100) to bcc to, eg. ["john@example.com", "jane@example.com"]
   * An email address to bcc to.
   */
  bcc: string[];
  /**
   * The subject of the email to be sent.
   */
  subject: string;
  /**
   * An HTML encoded email body.
   */
  htmlBody: string;
  /**
   * A plaintext email body.
   */
  textBody: string;
  /**
   * A template id to generate the email.
   */
  templateId?: string
  /**
   * The JSON data to be used to populate the email template.
   */
  templateData: Record<string, unknown>
  /**
   * An optional set of custom headers to be applied to the email.
   */
  customHeaders: {
    header: string;
    value: string;
  }[];
  /**
   * An array of attachment objects to be attached to the email.
   */
  attachments: EmailFile[];
  /**
   * An array of images to be inlined into the email.
   */
  inlines: EmailFile[];
  /**
   * Specify the version of the email structure
   */
  version: 1|2;
}

export {EmailSendParams}