import { Rule } from './Rule.js';

/**
 * Validates that a value contains at least a specified number of characters.
 */

export class MinLengthRule extends Rule {

  /**
   * Creates a minimum-length validation rule.
   *
   * @param {number} minLength - The minimum number of characters allowed.
   * @param {string} [errorMessage] - Optional custom error message.
   * @throws {Error} If minLength is not a non-negative integer.
   */
  constructor(minLength, errorMessage) {
    if (!Number.isInteger(minLength) || minLength < 0) {
      throw new Error('minLength must be a non-negative integer');
    }

    super(errorMessage || `This field must contain at least ${minLength} characters.`);
    this.minLength = minLength;
  }

  /**
   * Checks whether the value meets the minimum length.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value has the required minimum length.
   */
  validate(value, field, formData) {
    return value.length >= this.minLength && value.length >= 0;
  }
}
