import {Smtp2GoResponse} from "../../request";
import {Template} from "./template";

interface TemplateSearchResponse extends Smtp2GoResponse{
  data: {
    /**
     * If present can be passed to the call again in order to retrieve the next page of results
     */
    continue_token?: string;
    /**
     * A list of templates matching the search criteria
     */
    templates: Template[];
    /**
     * The total number of templates available
     */
    total_count: number;
  }
}

export {TemplateSearchResponse}