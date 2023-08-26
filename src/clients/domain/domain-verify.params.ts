import {DomainParams} from "./domain.params";

interface DomainVerifyParams extends DomainParams{
  /**
   * If passed an SSL certificate will be requisitioned for the tracking domain to enable HTTPS links
   */
  requisitionSsl:boolean;
}
export {DomainVerifyParams}