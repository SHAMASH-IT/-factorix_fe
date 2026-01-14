/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://opensource.org/licenses/AAL
 */

export function resolveTotalVariable(variable: string) {
  const [dollar, property] = variable.split('$');

  // This is right place to do aliasing as well.

  return { dollar, property };
}
