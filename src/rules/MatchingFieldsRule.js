import { Rule } from './Rule.js';

/**
 * Validates that a field has the same value as another field.
 */

export class MatchingFieldsRule extends Rule {

  /**
   * Creates a matching-fields validation rule.
   *
   * @param {string} identifier - Identifier of the field to compare against.
   * @param {string} [errorMessage] - Optional custom error message.
   */
  constructor(identifier, errorMessage) {
    super(errorMessage || 'The fields do not match.');
    this.identifier = identifier;
  }

  /**
   * Checks whether the value matches the referenced field.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when both field values are equal.
   */
  validate(value, field, formData) {
    return value === formData[this.identifier];
  }
}
