/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthenticated } from '../common/hooks/useAuthenticated';
import { RootState } from '../common/stores/store';
import { LoadingScreen } from './LoadingScreen';
import { Fallback } from '$app/components/Fallback';

export function PrivateRoute() {
  const authenticated = useAuthenticated();
  const user = useSelector((state: RootState) => state.user);

  return authenticated ? (
    user.user.id ? (
      <Fallback>
        <Outlet />
      </Fallback>
    ) : (
      <LoadingScreen />
    )
  ) : (
    <Navigate to="/login" />
  );
}
