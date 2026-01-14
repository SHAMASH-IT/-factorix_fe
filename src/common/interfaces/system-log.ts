/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface SystemLogRecord {
  id?: string;
  user_id?: string;
  company_id?: string;
  client_id?: string;
  event_id?: number;
  category_id?: number;
  type_id?: number;
  log: string;
  created_at: number;
}
