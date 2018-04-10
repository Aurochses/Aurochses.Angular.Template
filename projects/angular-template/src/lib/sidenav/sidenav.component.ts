import { Component } from '@angular/core';

import { TemplateSettings } from '../models/template-settings.model';
import { TemplateService } from '../services/template.service';

@Component({
    selector: 'aur-sidenav',
    templateUrl: './sidenav.component.html'
})
export class SidenavComponent {

    public settings: TemplateSettings;

    constructor(private templateService: TemplateService) {
        this.settings = templateService.settings;
    }

    toggleSidenavCollapse() {
        if (this.templateService.settings.sidenav.collapse) {
            this.templateService.resizeSidenav();
        }
    }

    closeSidenav() {
        this.templateService.settings.sidenav.open = false;
        this.templateService.resizeSidenav();
    }

    openSidenav() {
        this.templateService.settings.sidenav.open = true;
        this.templateService.resizeSidenav();
    }

}
