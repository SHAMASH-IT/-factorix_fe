/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Link } from '../../../components/forms/Link';
import Logo from '../../../resources/images/factorix-removebg-preview.png';

export function Header() {
  return (
    <>
      <div className="flex justify-center py-8">
        <Link to="/">
          <img src={Logo} alt="Factorix Logo"    />
        </Link>
      </div>
    </>
  );
}
