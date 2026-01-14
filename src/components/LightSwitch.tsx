/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Moon, Sun } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../common/stores/slices/settings';
import { RootState } from '../common/stores/store';

export function LightSwitch() {
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setDarkMode({ status: !darkMode }))}>
      {darkMode ? <Moon className="text-white" /> : <Sun />}
    </button>
  );
}
