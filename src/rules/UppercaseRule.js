import { Rule } from './Rule.js';

/**
 * Validates that a value contains a uppercase letter.
 */

export class UppercaseRule extends Rule {

  /**
   * Creates a uppercase validation rule.
   *
   * @param {string} [errorMessage] - Optional custom error message.
   */
  constructor(errorMessage) {
    super(errorMessage || 'This field must contain an uppercase letter.');
  }

  /**
   * Checks whether the value contains an uppercase letter.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value contains an uppercase letter.
   */
  validate(value, field, formData) {
    const uppercaseRegex = /\p{Lu}/u;
    return uppercaseRegex.test(value);
  }
}
