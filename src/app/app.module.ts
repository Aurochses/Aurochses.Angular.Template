import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { TemplateSettingsModel, TemplateModule } from '@aurochses/angular-template';
import { templateSettings } from '../environments/template-settings';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    TemplateModule
  ],
  providers: [
    { provide: TemplateSettingsModel, useValue: templateSettings }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
