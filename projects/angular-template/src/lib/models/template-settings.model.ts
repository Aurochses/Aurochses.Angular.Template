export class TemplateSettings {
  darkMode: boolean;
  defaultLang: string;
  toolbar: {
    logo: {
      enable: boolean;
      url: string;
    };
    breadcrumb: boolean;
    search: {
      enable: boolean;
      url: string;
    };
    fullScreen: boolean;
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
      url: string;
    };
  };
  sidenav: {
    enable: boolean;
    open: boolean;
    mode: string;
    collapse: boolean;
  };
  fabButton: boolean;
  footer: {
    enable: boolean;
    url: string;
  };
}
