import {Template} from "./template";

interface TemplateEditParams extends Template{
  /**
   * Pass this if you would like to change the ID of the template
   */
  newId: string;
}

export {TemplateEditParams}