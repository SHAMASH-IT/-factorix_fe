/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { atom } from 'jotai';
import { GroupSettings } from '../interfaces/group-settings';
import { Client } from '../interfaces/client';

export const activeSettingsAtom = atom<GroupSettings | Client | undefined>(
  undefined
);
