/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface TransactionValidation {
  base_type: string;
  date: string;
  amount: string;
  currency_id: string;
  bank_integration_id: string;
  description: string;
}
