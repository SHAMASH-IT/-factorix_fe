/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useLanguages } from '$app/common/hooks/useLanguages';
import { GenericSelectorProps } from './CountrySelector';
import { SelectField } from './forms';

export function LanguageSelector(props: GenericSelectorProps) {
  const languages = useLanguages();

  return (
    <SelectField
      value={props.value}
      onValueChange={props.onChange}
      label={props.label}
      errorMessage={props.errorMessage}
      dismissable={props.dismissable}
      customSelector
    >
      {languages.map((language, index) => (
        <option key={index} value={language.id}>
          {language.name}
        </option>
      ))}
    </SelectField>
  );
}
