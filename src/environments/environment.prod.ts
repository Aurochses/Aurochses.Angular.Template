import { authenticationSettings } from '../environments/authentication-settings.prod';
import { templateSettings } from '../environments/template-settings';

export const environment = {
  production: true,
  authenticationSettings: authenticationSettings,
  templateSettings: templateSettings
};
