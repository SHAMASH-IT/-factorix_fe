/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Spinner } from './Spinner';

export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner variant="dark" />
    </div>
  );
}
