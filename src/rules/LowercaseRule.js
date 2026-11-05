import { Rule } from './Rule.js';

/**
 * Validates that a value contains a lowercase letter.
 */

export class LowercaseRule extends Rule {

  /**
   * Creates a lowercase validation rule.
   *
   * @param {string} [errorMessage] - Optional custom error message.
   */
  constructor(errorMessage) {
    super(errorMessage || 'This field must contain a lowercase letter.');
  }

  /**
   * Checks whether the value contains a lowercase letter.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value contains a lowercase letter.
   */
  validate(value, field, formData) {
    const lowercaseRegex = /\p{Ll}/u;
    return lowercaseRegex.test(value);
  }
}
