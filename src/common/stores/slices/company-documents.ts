/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CompanyDocumentState {
  api: any;
  latestQueryUrl: string;
}

const initialState: CompanyDocumentState = {
  api: {},
  latestQueryUrl: '',
};

export const companyDocumentSlice = createSlice({
  name: 'companyDocuments',
  initialState,
  reducers: {
    updateLatestQueryUrl: (state, action: PayloadAction<{ url: string }>) => {
      state.latestQueryUrl = action.payload.url;
    },
  },
});

export const { updateLatestQueryUrl } = companyDocumentSlice.actions;
