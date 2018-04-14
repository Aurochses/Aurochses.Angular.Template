import { Injectable } from '@angular/core';
import { TemplateSettings } from '../models/template-settings.model';

@Injectable()
export class TemplateService {

  public settings: TemplateSettings;

  constructor(settings: TemplateSettings) {
    this.settings = settings;
  }

  toggleSidenav() {
    this.settings.sidenav.open = !this.settings.sidenav.open;
  }
}
