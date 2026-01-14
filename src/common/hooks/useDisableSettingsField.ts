/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Settings } from '../interfaces/company.interface';
import { useCompanyChanges } from './useCompanyChanges';
import { useCurrentSettingsLevel } from './useCurrentSettingsLevel';

export function useDisableSettingsField() {
  const companyChanges = useCompanyChanges();

  const { isCompanySettingsActive } = useCurrentSettingsLevel();

  return (propertyKey: keyof Settings) => {
    return (
      companyChanges &&
      Boolean(typeof companyChanges.settings[propertyKey] === 'undefined') &&
      !isCompanySettingsActive
    );
  };
}
