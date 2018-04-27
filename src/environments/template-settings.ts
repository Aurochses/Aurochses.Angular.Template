import {TemplateSettings} from '@aurochses/angular-template';

export const templateSettings: TemplateSettings = {
  toolbar: {
    logo: {
      enable: true,
      url: 'assets/logo.png'
    },
    i18n: {
      enable: true
    },
    fullScreen: {
      enable: true
    },
    applications: {
      enable: true,
      url: ''
    },
    notifications: {
      enable: true,
      url: 'config/notifications.json'
    },
    user: {
      enable: true,
      url: 'config/user.json'
    }
  },
  sidenav: {
    enable: true,
    mode: 'side',
    open: true
  }
};
