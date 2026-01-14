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
import { Quote } from '$app/common/interfaces/quote';
import { InvoiceSum } from '$app/common/helpers/invoices/invoice-sum';
import { InvoiceSumInclusive } from '$app/common/helpers/invoices/invoice-sum-inclusive';

export const quoteAtom = atom<Quote | undefined>(undefined);
export const invoiceSumAtom = atom<
  InvoiceSum | InvoiceSumInclusive | undefined
>(undefined);
