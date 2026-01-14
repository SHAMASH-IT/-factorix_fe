/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { SettingsLevel } from '../enums/settings';
import { useActiveSettingsDetails } from './useActiveSettingsDetails';

export function useCurrentSettingsLevel() {
  const activeSettingsDetails = useActiveSettingsDetails();

  const isCompanySettingsActive =
    SettingsLevel.Company === activeSettingsDetails.level;

  const isGroupSettingsActive =
    SettingsLevel.Group === activeSettingsDetails.level;

  const isClientSettingsActive =
    SettingsLevel.Client === activeSettingsDetails.level;

  return {
    isCompanySettingsActive,
    isGroupSettingsActive,
    isClientSettingsActive,
  };
}
