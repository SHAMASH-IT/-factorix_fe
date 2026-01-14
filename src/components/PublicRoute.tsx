/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Navigate, Outlet } from 'react-router';
import { useAuthenticated } from '../common/hooks/useAuthenticated';

export function PublicRoute() {
  const authenticated = useAuthenticated();

  return authenticated ? <Navigate to="/dashboard" /> : <Outlet />;
}
