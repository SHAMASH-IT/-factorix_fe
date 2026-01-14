/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export const enum TransactionType {
  Deposit = 'deposit',
  Withdrawal = 'withdrawal',
}

export const enum ApiTransactionType {
  Credit = 'CREDIT',
  Debit = 'DEBIT',
}

export const enum TransactionStatus {
  Unmatched = '1',
  Matched = '2',
  Converted = '3',
}
