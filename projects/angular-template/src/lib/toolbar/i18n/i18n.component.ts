import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'aur-i18n',
  styleUrls: ['i18n.component.scss'],
  templateUrl: './i18n.component.html'
})
export class I18nComponent {
  constructor(public translate: TranslateService) {
  }

  getLanguage() {
    return localStorage.getItem('language');
  }

  setLanguage(lang) {
    console.log('lang', lang)
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
