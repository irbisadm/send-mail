interface EmailMimeParams{
  /**
   * A valid MIME-encoded Email that has been Base64 encoded.
   */
  mime_email:string;
  test:boolean;
  xRemoteAddr?: string;
}

export {EmailMimeParams}