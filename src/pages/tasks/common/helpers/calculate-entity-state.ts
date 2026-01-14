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
import { parseTimeLog } from './calculate-time';

export function isTaskRunning(task: Task) {
  let running = false;

  parseTimeLog(task.time_log).forEach(([, stop]) => {
    if (stop === 0) {
      running = true;
    }
  });

  return running;
}

export function calculateEntityState(task: Task) {
  if (task.invoice_id) {
    return 'invoiced';
  }

  if (isTaskRunning(task)) {
    return 'active';
  }

  return 'logged';
}
