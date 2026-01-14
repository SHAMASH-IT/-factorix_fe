/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { ChangeEvent } from 'react';

export function isNonNumericValue(event: ChangeEvent<HTMLInputElement>) {
  if (isNaN(Number(event.target.value)) || event.target.value == '') {
    event.target.value = '0';

    return true;
  }

  return false;
}
