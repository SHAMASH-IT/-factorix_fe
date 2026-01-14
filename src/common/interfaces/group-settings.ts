/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface GroupSettings {
  id: string;
  name: string;
  settings: Record<string, any>;
  created_at: number;
  updated_at: number;
  archived_at: number;
  is_deleted: boolean;
  documents: any[];
}
