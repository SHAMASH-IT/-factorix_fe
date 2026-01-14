/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { RootState } from '$app/common/stores/store';
import { useSelector } from 'react-redux';

export function useCurrentAccount() {
  const companyUserState = useSelector(
    (state: RootState) => state.companyUsers
  );

  return companyUserState.api[companyUserState.currentIndex]?.account;
}
