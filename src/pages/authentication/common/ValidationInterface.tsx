/**
 * Factorix (https://www.shamash-it.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Factorix LLC (https://www.shamash-it.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface LoginValidation {
  email?: string[];
  password?: string[];
  one_time_password?: string[];
}

export interface RegisterValidation {
  email?: string[];
  password?: string[];
  password_confirmation?: string[];
}

export interface ForgotPasswordValidation {
  errors?: {
    email: string[];
  };
}
