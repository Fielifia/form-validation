import { Rule } from './Rule.js';

/**
 * Validates that a field contains a value.
 *
 * Empty strings, null and undefined values are considered invalid.
 */

export class RequiredRule extends Rule {

  /**
   * Creates a required-field rule.
   *
   * @param {string} [errorMessage] - Optional custom error message.
   */
  constructor(errorMessage) {
    super(errorMessage || 'This field is required.');
  }

  /**
   * Checks whether the value is present and not empty.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value is present.
   */
  validate(value, field, formData) {
    if (typeof value === 'boolean') {
      return value;
    }

    return value !== null &&
      value !== undefined &&
      String(value).trim() !== '';
  }
}
