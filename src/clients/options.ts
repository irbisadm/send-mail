interface Options{
  /**
   * Your SMTP2GO api_key. You can obtain one from [your control panel](https://app.smtp2go.com/sending/apikeys/).
   */
  key: string;
  /**
   * The SMTP2GO API's base URL. You can use this to override the default API URL. Default value is "https://api.smtp2go.com/v3/"
   * @default https://api.smtp2go.com/v3
   */
  url?: string;
  /**
   * HTTP request timeout in milliseconds. Default value is 5000.
   */
  timeout?: number;
}

export {Options};