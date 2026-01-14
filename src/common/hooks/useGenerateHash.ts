/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { sha256 } from 'js-sha256';

export function generate64CharHash() {
  const hash = sha256.create();
  hash.update(`${Date.now().toString()}${Math.random().toString()}`);

  return hash.hex();
}
