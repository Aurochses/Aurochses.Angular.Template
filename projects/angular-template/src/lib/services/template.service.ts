import { Injectable } from '@angular/core';
import { TemplateSettings } from '../models/template-settings.model';

@Injectable()
export class TemplateService {

  constructor(public settings: TemplateSettings) { }

  toggleSidenav() {
    this.settings.sidenav.open = !this.settings.sidenav.open;
  }
}
