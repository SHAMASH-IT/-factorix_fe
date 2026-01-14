/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { endpoint } from '$app/common/helpers';
import {
  MailerResource,
  MailerResourceType,
} from '$app/pages/invoices/email/components/Mailer';

interface Props {
  resourceType: MailerResourceType;
  downloadType?:
    | 'download_e_quote'
    | 'download_e_credit'
    | 'download_e_purchase_order';
}

export function useGenerateEInvoiceUrl(props: Props) {
  return (resource: MailerResource) => {
    if (resource.invitations.length === 0) {
      return;
    }

    if (resource.invitations.length > 0) {
      return endpoint('/api/v1/:resource/:invitation/:downloadType', {
        resource: props.resourceType,
        invitation: resource.invitations[0].key,
        downloadType: props.downloadType || 'download_e_invoice',
      });
    }
  };
}
