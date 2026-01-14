/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface ValidationBag {
  message: string;
  errors: Record<string, string[]>;
}

export interface GenericValidationBag<T> {
  message: string;
  errors?: T;
}
