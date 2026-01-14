/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Guard } from '../Guard';

export function admin(): Guard {
  return ({ companyUser }) => Promise.resolve(Boolean(companyUser?.is_admin));
}

export function owner(): Guard {
  return ({ companyUser }) => Promise.resolve(Boolean(companyUser?.is_owner));
}
