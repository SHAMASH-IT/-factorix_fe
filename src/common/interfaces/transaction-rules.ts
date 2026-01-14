/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { ExpenseCategory } from './expense-category';
import { Vendor } from './vendor';

export interface Rule {
  search_key: string;
  operator: string;
  value: string;
}

export interface TransactionRule {
  id: string;
  applies_to: string;
  archived_at: number;
  auto_convert: boolean;
  category_id: string;
  client_id: string;
  created_at: number;
  is_deleted: boolean;
  matches_on_all: boolean;
  name: string;
  rules: Rule[];
  updated_at: number;
  vendor_id: string;
  vendor: Vendor;
  expense_category: ExpenseCategory;
}
