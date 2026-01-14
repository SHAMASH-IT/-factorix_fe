/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { SettingsLevel } from '$app/common/enums/settings';
import { Guard } from '../Guard';

export function companySettings(): Guard {
  return ({ settingsLevel }) =>
    Promise.resolve(Boolean(settingsLevel === SettingsLevel.Company));
}
