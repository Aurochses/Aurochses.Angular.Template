import { Injectable } from '@angular/core';
import { TemplateSettingsModel } from '../models/template-settings.model';

@Injectable({
  providedIn: TemplateService,
})
export class TemplateService {

  public settings: TemplateSettingsModel;

  constructor(settings: TemplateSettingsModel) {
    this.settings = settings;
  }

  toggleSidenav() {
    this.settings.sidenav.open = !this.settings.sidenav.open;
  }
}
