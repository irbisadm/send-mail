import {BaseClient} from "../base.client";

class SmsClient extends BaseClient{
  async send(){
    throw 'Not implemented'
  };
  async viewReceived(){
    throw 'Not implemented'
  };
}
export {SmsClient}