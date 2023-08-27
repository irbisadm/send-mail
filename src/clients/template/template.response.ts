import {Smtp2GoResponse} from "../../request";
import {Template} from "./template";

interface TemplateResponse extends Smtp2GoResponse{
  data:Template
}
export {TemplateResponse}