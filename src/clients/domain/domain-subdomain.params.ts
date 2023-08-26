import {DomainParams} from "./domain.params";

interface DomainSubdomainParams extends DomainParams {
  new_subdomain: string;
  old_subdomain: string;
}

export {DomainSubdomainParams}