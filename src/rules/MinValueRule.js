import { Rule } from './Rule.js';

/**
 * Validates that a numeric value is greater than or equal to a minimum value.
 */

export class MinValueRule extends Rule {

  /**
   * Creates a minimum-value validation rule.
   *
   * @param {number} minValue - The minimum value allowed.
   * @param {string} [errorMessage] - Optional custom error message.
   * @throws {Error} If minValue is not a valid number.
   */
  constructor(minValue, errorMessage) {
    if (typeof minValue !== 'number' || Number.isNaN(minValue)) {
      throw new Error('minValue must be a number');
    }

    super(errorMessage || `This value must be at least ${minValue}.`);
    this.minValue = minValue;
  }

  /**
   * Checks whether the value is greater than or equal to the minimum value.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value meets the minimum value.
   */
  validate(value, field, formData) {
    return Number(value) >= this.minValue && value.length >= 0;
  }
}
