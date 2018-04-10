import { TemplateSettings } from '@aurochses/angular-template';

export const templateSettings: TemplateSettings = {
    darkMode: true,
    defaultLang: 'en',
    toolbar: {
        logo: {
            enable: true,
            url: 'assets/logotype.png'
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
        open: false,
        mode: 'over',
        collapse: false
    },
    fabButton: true,
    footer: {
        enable: true,
        url: 'config/footer.json'
    }
};
