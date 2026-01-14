/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useSetAtom } from 'jotai';

import { isPasswordRequiredAtom } from '$app/common/atoms/password-confirmation';
import { toast } from '../helpers/toast/toast';

export function useOnWrongPasswordEnter() {
  const setIsPasswordRequired = useSetAtom(isPasswordRequiredAtom);

  return (passwordIsRequired: boolean) => {
    if (passwordIsRequired) {
      toast.error('password_error_incorrect');
    } else {
      toast.dismiss();
    }

    setIsPasswordRequired(true);
  };
}
