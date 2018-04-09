import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularTemplateModule } from 'angular-template';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
