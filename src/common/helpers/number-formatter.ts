/**
 * Factorix (https://www.shamash-it.com).
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { numberFormat } from './number-format';

export class NumberFormatter {
  public static formatValue(value: string | number, precision: number) {
    return numberFormat(value, precision, '.', '');
  }
}
