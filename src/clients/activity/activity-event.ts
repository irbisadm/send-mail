import {EventType} from "../event-type";

interface ActivityEvent {
  From?: string;
  recipient?: string;
  subaccountName?: string;
  /**
   * The unique ID of the email which generated the event
   */
  emailId: string;
  /**
   * An RFC3339 encoded timestamp with UTC timezone indicating the timestamp of the event
   */
  date: Date;
  /**
   * A string indicating the type of the event
   */
  event?: EventType;
  /**
   * The recipients of the email
   */
  recipients?: string;
  /**
   * The subject of the email
   */
  subject?: string;
  /**
   * The username used to send the email
   */
  username?: string;
  /**
   * The value of the Reply-To header if present
   */
  replyTo?: string;
  /**
   * The envelope_sender of the email
   */
  sender?: string;
  /**
   * The value of the TO header
   */
  to?: string;
  /**
   * The value of the CC header
   */
  cc?: string;
  /**
   * The value of the BCC header
   */
  bcc?: string;
  /**
   * The SMTP response of the mail server
   */
  smtpResponse?: string;
  /**
   * The reason for an event occurring if present
   */
  reason?: string;
  /**
   * The IP address of the host associated with the event
   */
  host?: string;
  /**
   * The error message that occurred on certain events
   */
  error?: string;
  /**
   * Email client information
   */
  emailClient?: Record<string, unknown>;
  /**
   * Additional metadata for open/click events
   */
  metadata?: Record<string, unknown>;
  /**
   * The Outbound IP Address if available
   */
  outboundIp?: string;
  /**
   * The size of the email in bytes
   */
  byteSize?: number;
  /**
   * The full email headers if requested
   */
  headers?: string;

}

export {ActivityEvent}