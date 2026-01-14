/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface Parts {
  includes: string;
  header: string;
  body: string;
  product: string;
  task: string;
  footer: string;
}

export interface Design {
  id: string;
  is_custom: boolean;
  name: string;
  design: Parts;
  created_at: number;
  is_active: boolean;
  is_deleted: boolean;
  is_free: boolean;
  updated_at: number;
  is_template: boolean;
  entities: string;
}
