interface Email{
  /**
   * The number of attachments on the email
   */
  attachmentCount?: number;
  /**
   * A list of attachments found on the email
   */
  attachments: {
    byteCount: number;
    filename: string;
    mimetype: string;
    url: string;
  }[]
  /**
   * The size of the email in bytes
   */
  byteCount: number;
  /**
   * The emails unique ID
   */
  emailId:string;
  /**
   * The envelope from value
   */
  envelopeFrom: string;
  /**
   * The headers of the email
   */
  headers: string;
  /**
   * The recipient value
   */
  recipient: string;
  /**
   * The sender value
   */
  sender: string;
  /**
   * time indicating when the email was sent
   */
  sent: Date;
  /**
   * The subject of the email
   */
  subject: string;
  /**
   * The value of the To header
   */
  to: string;
  /**
   * A url that can be used to download the attachment
   */
  url: string;
  /**
   * The username that sent the email
   */
  username: string;
}

export {Email}