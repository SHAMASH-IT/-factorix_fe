/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export function useCleanDescriptionText() {
  return (descriptionText: string) => {
    if (descriptionText.includes('\\n ')) {
      return descriptionText.replace('\\n', '');
    }

    if (descriptionText.includes('\\n')) {
      return descriptionText.replace('\\n', ' ');
    }

    return descriptionText;
  };
}
