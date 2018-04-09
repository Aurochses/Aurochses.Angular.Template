import { Injectable } from '@angular/core';
import { TemplateSettings } from '../models/template-settings.model';

@Injectable({
  providedIn: TemplateService,
})
export class TemplateService {

  public settings: TemplateSettings;

  constructor(settings: TemplateSettings) {
    this.settings = settings;
  }

  toggleSidenav() {
    this.settings.sidenav.open = !this.settings.sidenav.open;
    this.resizeSidenav();
  }

  resizeSidenav() {
    if (this.settings.sidenav.mode === 'side') {
      const resizeEvent = document.createEvent('HTMLEvents');
      resizeEvent.initEvent('resize', true, true);
      document.dispatchEvent(resizeEvent);
    }
  }
}
