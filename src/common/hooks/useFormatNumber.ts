/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Number as NumberHelper } from '$app/common/helpers/number';
import { useCurrentCompany } from './useCurrentCompany';
import { useResolveCurrency } from './useResolveCurrency';

export function useFormatNumber() {
    const resolveCurrency = useResolveCurrency();
    const company = useCurrentCompany();

    return (
        value: string | number
    ) => {
        const currency = resolveCurrency(company?.settings.currency_id);

        if (currency) {
            return NumberHelper.formatValue(
                isNaN(Number(value)) ? 0 : value,
                currency
            );
        }

        return value;
    };
}
