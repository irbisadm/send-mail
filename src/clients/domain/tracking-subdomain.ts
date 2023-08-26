interface TrackingSubdomain{
  enabled:boolean;
  fulldomain:string;
  subdomain:string;
  domain:string;
  suffix:string;
  cnameVerified: boolean;
  cnameStatus:string;
  cnameValue:string;
}

export {TrackingSubdomain}