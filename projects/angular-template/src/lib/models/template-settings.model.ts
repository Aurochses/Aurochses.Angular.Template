export class TemplateSettings {
  toolbar: {
    logo: {
      enable: boolean;
      url: string;
    };
    i18n: {
      enable: boolean;
      localStorageKey: string;
    };
    fullScreen: {
      enable: boolean;
    };
    applications: {
      enable: boolean;
      url: string;
    };
    notifications: {
      enable: boolean;
      url: string;
    };
    user: {
      enable: boolean;
      allowSilentSignIn: boolean;
    }
  };
  sidenav: {
    enable: boolean;
    mode: string;
    open: boolean;
  };
  breadcrumb: {
    enable: boolean;
    homeTitle: string;
  };
  title: {
    enable: boolean;
  };
}
