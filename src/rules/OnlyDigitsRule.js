import { Rule } from './Rule.js';

/**
 * Validates that a value contains only digits.
 */

export class OnlyDigitsRule extends Rule {

  /**
   * Creates a only-digits validation rule.
   *
   * @param {string} [errorMessage] - Optional custom error message.
   */
  constructor(errorMessage) {
    super(errorMessage || 'This field may only contain digits.');
  }

  /**
   * Checks whether the value contains only digits.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value contains only digits.
   */
  validate(value, field, formData) {
    const digitRegex = /^\d+$/;
    return digitRegex.test(value);
  }
}
