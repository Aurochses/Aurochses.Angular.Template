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
}
