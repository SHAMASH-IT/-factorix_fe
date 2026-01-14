/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface Params {
  perPage?: number | string;
  currentPage?: number | string;
  filter?: string;
  status?: string[];
  sort?: string;
  companyDocuments?: 'true' | 'false';
}
