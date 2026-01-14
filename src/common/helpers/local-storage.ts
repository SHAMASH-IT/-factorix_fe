/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export function clearLocalStorage() {
  const displayChromeExtensionBanner = localStorage.getItem(
    'displayChromeExtensionBanner'
  );

  localStorage.clear();

  if (displayChromeExtensionBanner) {
    localStorage.setItem(
      'displayChromeExtensionBanner',
      displayChromeExtensionBanner
    );
  }
}
