/**
 * Abstract base class for validation rules.
 * 
 * Subclasses define their own validation logic by implementing validate()
 * 
 */
export class Rule {

  /**
   * Creates a validation rule.
   * 
   * @param {string} errorMessage - The message returned when the rule is violated.
   * @throws {Error} If rule is instantiated directly.
   */
  constructor(errorMessage) {
    if (this.constructor === Rule) {
      throw new Error('Rule is an abstract class and cannot be instantiated')
    }

    this.errorMessage = errorMessage
  }

  /**
   * Validates a value according to the rule.
   * 
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} Whether the value satisfies the rule.
   * @throws {Error} If called without being implemented by a subclass.
   */
  validate(value, field, formData) {
    throw new Error(`The method 'validate()' must be implemented by the subclass [${this.constructor.name}]`)
  }
}
