import { Rule } from './Rule.js';

/**
 * Validates that a value has a valid email address format.
 */

export class EmailRule extends Rule {

  /**
   * Creates a email validation rule.
   *
   * @param {string} [errorMessage] - Optional custom error message.
   */
  constructor(errorMessage) {
    super(errorMessage || 'Please enter a valid email address.');
  }

  /**
   * Checks whether the value matches the expected email format.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value has a valid email format.
   */
  validate(value, field, formData) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }
}
