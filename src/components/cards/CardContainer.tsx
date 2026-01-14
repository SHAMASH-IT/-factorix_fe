/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export function CardContainer(props: { children: React.ReactNode }) {
  return <div className="px-4 sm:px-6 py-4 space-y-6">{props.children}</div>;
}
