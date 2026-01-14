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
import { updateChanges } from '$app/common/stores/slices/user';

export function useHandleCurrentUserChangeProperty() {
  const dispatch = useDispatch();

  return (property: string, value: string | number | boolean) => {
    dispatch(
      updateChanges({
        property,
        value,
      })
    );
  };
}
