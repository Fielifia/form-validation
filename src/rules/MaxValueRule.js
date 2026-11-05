import { Rule } from './Rule.js';

/**
 * Validated that a numeric value does not exceed a maximum value.
 */

export class MaxValueRule extends Rule {

  /**
   * Creates a maximum-value validation rule.
   *
   * @param {number} maxValue - The maximum value allowed.
   * @param {string} [errorMessage] - Optional custom error message.
   * @throws {Error} If maxValue is not a valid number.
   */
  constructor(maxValue, errorMessage) {
    if (typeof maxValue !== 'number' || Number.isNaN(maxValue)) {
      throw new Error('maxValue must be a number');
    }

    super(errorMessage || `This value must not exceed ${maxValue}.`);
    this.maxValue = maxValue;
  }

  /**
   * Checks whether the value does not exceed the maximum value.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value is within the maximum value.
   */
  validate(value, field, formData) {
    return Number(value) <= this.maxValue && value.length >= 0;
  }
}
