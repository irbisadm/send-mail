import {DomainParams} from "./domain.params";

interface DomainSubdomainParams extends DomainParams {
  newSubdomain: string;
  oldSubdomain: string;
}

export {DomainSubdomainParams}