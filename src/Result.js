/**
 * Represents the result of a validation.
 * 
 * The result contains the overall validation status and any validation errors.
 *
 */
class Result {
  #errors = []

  /**
   * Creates a new validation result.
   * 
   * @param {boolean} success - Whether the validation was successful.
   */
  constructor(success = true) {
    this.success = success
  }

  /**
   * Returns the validation errors.
   * 
   * @returns {Array} The validation errors.
   */
  get errors() {
    return [...this.#errors]
  }

  /**
   * Adds a validation error to the result.
   *
   * @param {ValidationError} validationError - The error produced vy a failed rule.
   */
  addError(validationError) {
    this.#errors.push(validationError)
  }

}

export default Result
