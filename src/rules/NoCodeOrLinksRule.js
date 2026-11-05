import { Rule } from './Rule.js';

/**
 * Validates that a value does not contain code or web links.
 */

export class NoCodeOrLinksRule extends Rule {

  /**
   * Creates a code-and-link validation rule.
   *
   * @param {string} [errorMessage] - Optional custom error message.
   */
  constructor(errorMessage) {
    super(errorMessage || 'This field may not contain code or links.');
  }

  /**
   * Checks whether the value contains neither code nor links.
   *
   * @param {*} value - The value to validate.
   * @param {Field} field - The field being validated.
   * @param {Object} formData - All submitted form data.
   * @returns {boolean} True when the value contains no detected code or links.
   */
  validate(value, field, formData) {
    const codeRegex = /<[^>]*>|javascript:/i;
    const linkRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9-]+\.[a-zA-Z]{2,})/i;

    return (!codeRegex.test(value) && !linkRegex.test(value));
  }
}
