import { Rule } from './Rule.js';

/**
 * Validates that a value contains only letters.
 */

export class OnlyLettersRule extends Rule {

  /**
   * Creates a only-letters validation rule.
   *
   * @param {string} [errorMessage] - Optional custom error message.
   */
  constructor(errorMessage) {
    super(errorMessage || 'This field may only contain letters.');
  }

  /**
   * Checks whether the value contains only letters.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value contains only letters.
   */
  validate(value, field, formData) {
    const letterRegex = /^\p{L}*$/u;
    return letterRegex.test(value);
  }
}
