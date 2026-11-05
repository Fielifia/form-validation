import { Rule } from './Rule.js';

/**
 * Validates that a value contains at least one special character.
 */

export class SpecialCharacterRule extends Rule {

  /**
   * Creates a special-character validation rule.
   *
   * @param {string} [errorMessage] - Optional custom error message.
   */
  constructor(errorMessage) {
    super(errorMessage);
    this.errorMessage = errorMessage || 'This field must contain a special character.';
  }

  /**
   * Checks whether the value contains a special character.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value contains a special character.
   */
  validate(value, field, formData) {
    const specialCharacterRegex = /[^\p{L}\d\s]/u;
    return specialCharacterRegex.test(value);
  }
}
