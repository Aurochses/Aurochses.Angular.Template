import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'aur-i18n',
  styleUrls: ['i18n.component.scss'],
  templateUrl: './i18n.component.html'
})
export class I18nComponent {

  constructor(private templateService: TemplateService, public translateService: TranslateService) { }

  getLanguage() {
    return this.translateService.currentLang;
  }

  setLanguage(language) {
    this.translateService.use(language);

    localStorage.setItem(this.templateService.settings.toolbar.i18n.localStorageKey, language);
  }
}
