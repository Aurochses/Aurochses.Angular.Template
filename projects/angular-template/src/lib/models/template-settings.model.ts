export class TemplateSettings {
  toolbar: {
    logo: {
      enable: boolean;
      url: string;
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
      url: string;
    };
  };
  sidenav: {
    enable: boolean;
    mode: string;
    open: boolean;
  };
  breadcrumbs: {
    enable: boolean;
  };
}
