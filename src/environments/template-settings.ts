import {TemplateSettings} from '@aurochses/angular-template';

export const templateSettings: TemplateSettings = {
  toolbar: {
    logo: {
      enable: true,
      url: 'assets/logo.png'
    },
    i18n: {
      enable: true,
      localStorageKey: 'language'
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
      allowSilentSignIn: true
    }
  },
  sidenav: {
    enable: true,
    mode: 'side',
    open: true
  },
  title: {
    enable: true
  }
};
