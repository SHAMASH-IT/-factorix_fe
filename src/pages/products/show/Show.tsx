/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { route } from '$app/common/helpers/route';
import { Navigate, useParams } from 'react-router-dom';

export default function Show() {
  const { id } = useParams();

  return <Navigate to={route('/products/:id/edit', { id })} />;
}
