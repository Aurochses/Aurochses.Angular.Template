import { AuthenticationSettings } from '@aurochses/angular-auth';

export const authenticationSettings: AuthenticationSettings = {
  authority: 'http://identityserver.staging.csharp.aurochses.demo.by',
  client_id: 'Aurochses.Angular.Template',
  redirect_uri: 'http://template.staging.angular.aurochses.demo.by/auth.html',
  post_logout_redirect_uri: 'http://template.staging.angular.aurochses.demo.by',
  response_type: 'id_token token',
  scope: 'openid profile email api permissions',
  silent_redirect_uri: 'http://template.staging.angular.aurochses.demo.by/silent-renew.html',
  automaticSilentRenew: true,
  accessTokenExpiringNotificationTime: 240,
  filterProtocolClaims: true,
  loadUserInfo: true
};
