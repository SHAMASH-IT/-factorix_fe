/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export function route(
  path: string,
  parts: Record<string, unknown> = {}
): string {
  let url = path;

  for (const part in parts) {
    url = url.replace(`:${part}`, parts[part] as string);
  }

  return url;
}
