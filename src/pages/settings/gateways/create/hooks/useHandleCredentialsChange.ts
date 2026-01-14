/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { CompanyGateway } from '$app/common/interfaces/company-gateway';
import { Field } from './useResolveInputField';

export function useHandleCredentialsChange(
  setCompanyGateway: React.Dispatch<
    React.SetStateAction<CompanyGateway | undefined>
  >
) {
  return (field: keyof Field, value: string | number | boolean) => {
    setCompanyGateway(
      (companyGateway) =>
        companyGateway && {
          ...companyGateway,
          config: JSON.stringify({
            ...JSON.parse(companyGateway.config),
            [field]: value,
          }),
        }
    );
  };
}
