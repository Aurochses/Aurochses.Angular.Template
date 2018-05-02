import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { environment } from '../environments/environment';

import {
  AuthenticationModule,
  AuthenticationService,
  AuthenticationGuard,
  AuthorizationGuard
} from '@aurochses/angular-auth';

import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';

import { TemplateModule } from '@aurochses/angular-template';

import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';

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
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    RouterModule,
    AppRoutesModule,
    AuthenticationModule.forRoot(environment, environment.authenticationSettings),
    TemplateModule.forRoot(environment, environment.templateSettings)
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
