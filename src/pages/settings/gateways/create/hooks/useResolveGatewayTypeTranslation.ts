/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import gatewayType from '$app/common/constants/gateway-type';

export function useResolveGatewayTypeTranslation() {
  return (id: string) => {
    return gatewayType[id as keyof typeof gatewayType] || 'other';
  };
}
