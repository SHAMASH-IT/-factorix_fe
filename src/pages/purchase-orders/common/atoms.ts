/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { PurchaseOrder } from '$app/common/interfaces/purchase-order';
import { atom } from 'jotai';

export const purchaseOrderAtom = atom<PurchaseOrder | undefined>(undefined);
