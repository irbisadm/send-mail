import {TrackingSubdomain} from "./tracking-subdomain";

interface Domain{
  fulldomain: string;
  subdomain?: string;
  domain: string;
  suffix: string;
  dkimSelector: string;
  dkimVerified: boolean;
  dkimStatus: string;
  dkimValue: string;
  rpathVerified: boolean;
  rpathStatus: string
  rpathValue: string,
  tracking_subdomains: TrackingSubdomain[];
}
export {Domain}