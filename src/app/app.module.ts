import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';

import {
  AuthenticationModule,
  AuthenticationService,
  AuthenticationGuard,
  AuthorizationGuard
} from '@aurochses/angular-auth';
import { authenticationSettings } from '../environments/authentication-settings';

import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';

import { TemplateModule } from '@aurochses/angular-template';
import { templateSettings } from '../environments/template-settings';

import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutesModule,
    AuthenticationModule.forRoot(environment, authenticationSettings),
    TemplateModule.forRoot(environment, templateSettings),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    AuthorizationGuard,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
