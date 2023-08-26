import {Options} from "./options";
import {Smtp2goRequest} from "../request";
import {ActivityClient} from "./activity";
import {AllowedSenderClient} from "./allowed-senders";
import {DomainClient} from "./domain";
import {EmailClient} from "./email";
import {SingleSenderEmailClient} from "./single-sender-emails";
import {SmtpUserClient} from "./smtp-users";
import {StatisticsClient} from "./statistics";
import {SubaccountClient} from "./subaccounts";
import {SuppressionClient} from "./suppressions";
import {TemplateClient} from "./templates";
import {SmsClient} from "./sms";
import {WebhookClient} from "./webhooks";

class Client{
  /**
   * Allows you to search for events in the activity stream. https://apidoc.smtp2go.com/documentation/#/Activity
   */
  readonly activity:ActivityClient;
  /**
   * If you'd like only certain sender email addresses to be able to send emails through your account, you can specify the details with these endpoints. https://apidoc.smtp2go.com/documentation/#/Activity
   */
  readonly allowedSender:AllowedSenderClient;
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
  readonly singleSenderEmail:SingleSenderEmailClient;
  /**
   * Manage the SMTP users in your account. https://apidoc.smtp2go.com/documentation/#/SMTP%20Users
   */
  readonly smtpUser:SmtpUserClient;
  /**
   * Retrieve different statistical reports for your account. https://apidoc.smtp2go.com/documentation/#/Statistics
   */
  readonly statistics:StatisticsClient;
  /**
   * Manage the list of email addresses and domains that are automatically suppressed from receiving emails. https://apidoc.smtp2go.com/documentation/#/Suppressions
   */
  readonly suppression:SuppressionClient;
  /**
   * https://apidoc.smtp2go.com/documentation/#/Subaccounts
   */
  readonly subaccount:SubaccountClient;
  /**
   * Manage your personal email templates. https://apidoc.smtp2go.com/documentation/#/Templates
   */
  readonly template:TemplateClient;
  /**
   * Send an SMS message. https://apidoc.smtp2go.com/documentation/#/SMS
   */
  readonly sms:SmsClient;
  /**
   * https://apidoc.smtp2go.com/documentation/#/Webhooks
   */
  readonly webhook:WebhookClient;

  private readonly request:Smtp2goRequest;
  constructor(options:Options){
    this.request = new Smtp2goRequest(options);
    this.activity = new ActivityClient(this.request);
    this.allowedSender = new AllowedSenderClient(this.request);
    this.email = new EmailClient(this.request);
    this.domain = new DomainClient(this.request);
    this.singleSenderEmail = new SingleSenderEmailClient(this.request);
    this.smtpUser = new SmtpUserClient(this.request);
    this.statistics = new StatisticsClient(this.request);
    this.suppression = new SuppressionClient(this.request);
    this.subaccount = new SubaccountClient(this.request);
    this.templates = new TemplateClient(this.request);
    this.sms = new SmsClient(this.request);
    this.webhook = new WebhookClient(this.request);
  }
}

export {Client}