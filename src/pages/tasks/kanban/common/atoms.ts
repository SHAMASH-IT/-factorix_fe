/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Task } from '$app/common/interfaces/task';
import { atom } from 'jotai';

export const currentTaskAtom = atom<Task | undefined>(undefined);
export const currentTaskIdAtom = atom<string | undefined>(undefined);

export const isKanbanViewSliderVisibleAtom = atom(false);
export const isKanbanEditSliderVisibleAtom = atom(false);
