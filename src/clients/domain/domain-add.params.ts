import {DomainParams} from "./domain.params";

interface DomainAddParams extends DomainParams{
  /**
   * If `auto_verify` is True and this is passed an SSL certificate will be requisitioned for the tracking domain to enable HTTPS links
   */
  requisition_ssl?: boolean;
  /**
   * A subdomain to use as tracking subdomain
   */
  trackingSubdomain?: string;
  /**
   * A subdomain to use as return-path subdomain
   */
  returnpathSubdomain?: string;
  /**
   * If true is passed this will cause the domain to be automatically verified without having to call the domain/verify endpoint
   */
  autoVerify?: boolean;
}
export {DomainAddParams}