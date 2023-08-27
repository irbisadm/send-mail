interface TemplateSearchParams{
  /**
   * Determines if search terms are matched exactly or using wildcards
   */
  fuzzySearch: boolean;
  /**
   * An array of strings to search on
   */
  searchTerms: string[];
  /**
   * An array of tags to search on
   */
  tags: string[];
  /**
   * Sort direction, sorts either asc or desc by template name
   */
  sortDirection: 'asc'|'desc';
  /**
   * Number of templates to retrieve per call
   */
  pageSize?: number;
  /**
   * A token provided by a prior call to this endpoint, passing this will cause it to fetch the next page of results
   */
  continueToken?: string;
}

export {TemplateSearchParams}