/**
 * Factorix (https://www.shamash-it.com).
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { EntityState } from '$app/common/enums/entity-state';

export default {
  [EntityState.Active]: 'active',
  [EntityState.Archived]: 'archived',
  [EntityState.Deleted]: 'deleted',
};
