import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');

    const storedLanguage = localStorage.getItem('language');
    const detectedLanguage = storedLanguage ? storedLanguage : translate.getBrowserLang();
    translate.use(detectedLanguage.match(/en|de/) ? detectedLanguage : 'en');
  }
}
