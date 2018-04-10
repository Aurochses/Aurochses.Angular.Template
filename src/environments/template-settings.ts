import { TemplateSettings } from '@aurochses/angular-template';

export const templateSettings: TemplateSettings = {
    darkMode: true,
    defaultLang: 'en',
    toolbar: {
        logo: {
            enable: true,
            url: 'assets/logo.png'
        },
        breadcrumb: true,
        search: {
            enable: true,
            url: 'true'
        },
        fullScreen: true,
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
        open: true,
        mode: 'side',
        collapse: false
    },
    fabButton: true,
    footer: {
        enable: true,
        url: 'config/footer.json'
    }
};
