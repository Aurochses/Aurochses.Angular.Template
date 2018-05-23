import { authenticationSettings } from '../environments/authentication-settings.staging';
import { templateSettings } from '../environments/template-settings';

export const environment = {
  production: false,
  authenticationSettings: authenticationSettings,
  templateSettings: templateSettings
};
