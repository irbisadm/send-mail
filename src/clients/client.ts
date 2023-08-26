import {Options} from "./options";
import {Smtp2goRequest} from "../request";
import {ActivityClient} from "./activity";
import {AllowedSendersClient} from "./allowed-senders";
import {DomainClient} from "./domain";
import {EmailClient} from "./email";
import {SingleSenderEmailsClient} from "./single-sender-emails";
import {SmtpUsersClient} from "./smtp-users";
import {StatisticsClient} from "./statistics";
import {SubaccountsClient} from "./subaccounts";
import {SuppressionsClient} from "./suppressions";
import {TemplatesClient} from "./templates";
import {SmsClient} from "./sms";
import {WebhooksClient} from "./webhooks";

class Client{
  /**
   * Allows you to search for events in the activity stream. https://apidoc.smtp2go.com/documentation/#/Activity
   */
  readonly activity:ActivityClient;
  /**
   * If you'd like only certain sender email addresses to be able to send emails through your account, you can specify the details with these endpoints. https://apidoc.smtp2go.com/documentation/#/Activity
   */
  readonly allowedSenders:AllowedSendersClient;
  /**
   * Send an email, or retrieve details of past emails that have been sent. https://apidoc.smtp2go.com/documentation/#/Emails
   */
  readonly email:EmailClient;
  /**
   * Manage sender domains for your account to allow emails to be properly authenticated and improve delivery rates. https://apidoc.smtp2go.com/documentation/#/Emails
   */
  readonly domain:DomainClient;
  /**
   * Manage single sender emails for your account to authorize individual email addresses to send emails where you are unable to otherwise add a sender domain.  https://apidoc.smtp2go.com/documentation/#/Single%20Sender%20Emails
   */
  readonly singleSenderEmails:SingleSenderEmailsClient;
  /**
   * Manage the SMTP users in your account. https://apidoc.smtp2go.com/documentation/#/SMTP%20Users
   */
  readonly smtpUsers:SmtpUsersClient;
  /**
   * Retrieve different statistical reports for your account. https://apidoc.smtp2go.com/documentation/#/Statistics
   */
  readonly statistics:StatisticsClient;
  /**
   * Manage the list of email addresses and domains that are automatically suppressed from receiving emails. https://apidoc.smtp2go.com/documentation/#/Suppressions
   */
  readonly suppressions:SuppressionsClient;
  /**
   * https://apidoc.smtp2go.com/documentation/#/Subaccounts
   */
  readonly subaccounts:SubaccountsClient;
  /**
   * Manage your personal email templates. https://apidoc.smtp2go.com/documentation/#/Templates
   */
  readonly templates:TemplatesClient;
  /**
   * Send an SMS message. https://apidoc.smtp2go.com/documentation/#/SMS
   */
  readonly sms:SmsClient;
  /**
   * https://apidoc.smtp2go.com/documentation/#/Webhooks
   */
  readonly webhooks:WebhooksClient;

  private readonly request:Smtp2goRequest;
  constructor(options:Options){
    this.request = new Smtp2goRequest(options);
    this.activity = new ActivityClient(this.request);
    this.allowedSenders = new AllowedSendersClient(this.request);
    this.email = new EmailClient(this.request);
    this.domain = new DomainClient(this.request);
    this.singleSenderEmails = new SingleSenderEmailsClient(this.request);
    this.smtpUsers = new SmtpUsersClient(this.request);
    this.statistics = new StatisticsClient(this.request);
    this.suppressions = new SuppressionsClient(this.request);
    this.subaccounts = new SubaccountsClient(this.request);
    this.templates = new TemplatesClient(this.request);
    this.sms = new SmsClient(this.request);
    this.webhooks = new WebhooksClient(this.request);
  }
}

export {Client}