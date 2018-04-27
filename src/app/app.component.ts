import { Component } from '@angular/core';

import { TranslateService } from "@ngx-translate/core";

import { TemplateService } from '@aurochses/angular-template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private templateService: TemplateService, translateService: TranslateService) {
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('en');

    if (!localStorage.getItem(templateService.settings.toolbar.i18n.localStorageKey)) {
      localStorage.setItem(templateService.settings.toolbar.i18n.localStorageKey, translateService.getDefaultLang());
    }

    const detectedLanguage = localStorage.getItem(templateService.settings.toolbar.i18n.localStorageKey);
    translateService.use(detectedLanguage.match(/en|de/) ? detectedLanguage : translateService.getDefaultLang());
  }
}
