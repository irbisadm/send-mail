import {EventType} from "../event-type";

interface ActivitySearchParams {
  subaccountIds?: number[];
  /**
   * datetime which defaults to current date at midnight. The range will be inclusive of start_date and exclusive of end_date.
   */
  startDate?: Date;
  /**
   * datetime which defaults to now.
   */
  endDate?: Date;
  /**
   * A search string used to filter the events
   */
  search?: string
  /**
   * A search string used to filter on subject
   */
  searchSubject?: string
  /**
   * A search string used to filter on the email sender
   */
  searchSender?: string
  /**
   * A search string used to filter on the email recipient
   */
  searchRecipient?: string
  /**
   * A list of usernames to filter events by
   */
  searchUsernames?: string[];
  /**
   * A list of subaccounts to filter events by
   */
  subaccounts?: string[]
  /**
   * An integer value indicating the maximum number of events to return ( max 100 )
   */
  limit?: number
  /**
   * A string containing a token used to fetch the next page of results, based on the current search
   */
  continueToken?: string
  /**
   * A boolean flag indicating whether to return all events for emails or only the latest event for each email
   */
  onlyLatest?: boolean
  /**
   * A list of event types to return, if empty will return all possible events
   */
  eventTypes?: EventType[];
  /**
   * Return the full email headers with the response
   */
  includeHeaders?: boolean

}

export {ActivitySearchParams}