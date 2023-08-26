interface TemplateSearchParams{
  /**
   * Determines if search terms are matched exactly or using wildcards
   */
  fuzzy_search: boolean;
  /**
   * An array of strings to search on
   */
  search_terms: string[];
  /**
   * An array of tags to search on
   */
  tags: string[];
  /**
   * Sort direction, sorts either asc or desc by template name
   */
  sort_direction: 'asc'|'desc';
  /**
   * Number of templates to retrieve per call
   */
  page_size?: number;
  /**
   * A token provided by a prior call to this endpoint, passing this will cause it to fetch the next page of results
   */
  continue_token?: string;
}

export {TemplateSearchParams}