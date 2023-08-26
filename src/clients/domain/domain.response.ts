import {Domain} from "./domain";
import {Smtp2GoResponse} from "../../request";

interface DomainResponse extends Smtp2GoResponse{
  data: Domain[]
}

export {DomainResponse};