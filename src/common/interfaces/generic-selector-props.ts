/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface GenericSelectorProps<T> {
  inputLabel?: string | null;
  value?: string | undefined;
  defaultValue?: string | undefined;
  readonly?: boolean;
  clearButton?: boolean;
  onChange: (resource: T) => unknown;
  onClearButtonClick?: () => unknown;
  errorMessage?: string | string[];
}
