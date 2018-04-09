import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TemplateSettings, TemplateModule } from '@aurochses/angular-template';
import { templateSettings } from '../environments/template-settings';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateModule
  ],
  providers: [
    { provide: TemplateSettings, useValue: templateSettings }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
