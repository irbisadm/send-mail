interface SubaccountSearchParams{
  /**
   * Determines if search terms are matched exactly or using wildcards
   */
  fuzzySearch: boolean;
  /**
   * An array of strings to search on
   */
  searchTerms:string[]
  /**
   * Controls which states you will see, one of all, active, closed or suspended
   */
  states?: string;
  /**
   * Sort direction, sorts either asc or desc by subaccount name
   */
  sortDirection?: 'asc'|'desc';
  /**
   * Number of subaccounts to retrieve per call
   */
  pageSize?:number
  /**
   * A token provided by a prior call to this endpoint, passing this will cause it to fetch the next page of results
   */
  continueToken?:string;
}
export {SubaccountSearchParams}