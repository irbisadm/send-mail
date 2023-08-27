interface SuppressionRemoveParams{
  /**
   * The email address or domain you would like to remove from your suppression's
   */
  emailAddress: string;
  /**
   * A list of block types you would like to remove for the given email or domain
   */
  reasons: string;
}
export {SuppressionRemoveParams}