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
      url: 'assets/applications.json',
      current: {
        id: '1',
        showInMenu: true
      }
    },
    notifications: {
      enable: true,
      url: 'assets/notifications.json'
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
  breadcrumb: {
    enable: true,
    homeTitle: 'MENU.HOME'
  },
  title: {
    enable: true
  }
};
