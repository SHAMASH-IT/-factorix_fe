/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useDispatch } from 'react-redux';
import { resetChanges } from '../stores/slices/company-users';
import { setActiveSettings } from '../stores/slices/settings';

export function useSwitchToCompanySettings() {
  const dispatch = useDispatch();

  return () => {
    dispatch(resetChanges('company'));

    dispatch(
      setActiveSettings({
        status: {
          name: '',
          level: 'company',
        },
      })
    );
  };
}
