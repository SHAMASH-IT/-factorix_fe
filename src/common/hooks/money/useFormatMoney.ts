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
import { useCurrentCompany } from '../useCurrentCompany';
import { useResolveCountry } from '../useResolveCountry';
import { useResolveCurrency } from '../useResolveCurrency';

export function useFormatMoney() {
  const resolveCountry = useResolveCountry();
  const resolveCurrency = useResolveCurrency();
  const company = useCurrentCompany();

  return (
    value: string | number,
    countryId: string | undefined,
    currencyId: string | undefined,
    fractionDigits?: number,
    showCurrencyCode?: boolean
  ) => {
    const currentCountryId = countryId || company?.settings.country_id;
    const currentCurrencyId =
      currencyId && currencyId !== '999'
        ? currencyId
        : company?.settings.currency_id;

    const country = resolveCountry(currentCountryId);
    const currency = resolveCurrency(currentCurrencyId);

    if (country && currency) {
        // -------------------------------
  // ⭐ Custom formatting for TND ⭐
  // -------------------------------
  if (currency.code === 'TND') {
    const amount = isNaN(Number(value)) ? 0 : Number(value);

    // Format as ### ### ###,000
    const formatted = new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
      useGrouping: true,
    })
      .format(amount)
      .replace(/\./g, ' ') // thousands separator
      .replace(/\s/g, ' ') // normalize spaces
      .replace(/,/g, ','); // decimal separator (already correct)

    return showCurrencyCode
      ? `${formatted} TND`
      : formatted;
  }

      return NumberHelper.formatMoney(
        isNaN(Number(value)) ? 0 : value,
        currency,
        country,
        {
          showCurrencyCode:
            showCurrencyCode ?? company.settings.show_currency_code,
        }
      );
    }

    if (fractionDigits) {
      return Number(value).toFixed(fractionDigits);
    }

    return value;
  };
}
