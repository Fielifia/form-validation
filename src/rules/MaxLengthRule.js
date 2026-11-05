import { Rule } from './Rule.js';

/**
 * Validates that a value does not exceed a specified number of characters.
 */

export class MaxLengthRule extends Rule {

  /**
   * Creates a maximum-length validation rule.
   *
   * @param {number} maxLength - The maximum number of characters allowed.
   * @param {string} [errorMessage] - Optional custom error message.
   * @throws {Error} If maxLength is not a non-negative integer.
   */
  constructor(maxLength, errorMessage) {
    if (!Number.isInteger(maxLength) || maxLength < 0) {
      throw new Error('maxLength must be a non-negative integer');
    }

    super(errorMessage || `This field may contain at most ${maxLength} characters.`);
    this.maxLength = maxLength;
  }

  /**
   * Checks whether the value is within the maximum length.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value does not exceed the maximum length.
   */
  validate(value, field, formData) {
    return value.length <= this.maxLength && value.length >= 0;
  }
}
