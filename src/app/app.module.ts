import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
  AuthenticationModule,
  AuthenticationGuard,
  AuthorizationGuard
} from '@aurochses/angular-auth';

import { TemplateModule } from '@aurochses/angular-template';

import { environment } from '../environments/environment';

import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';

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
    AuthenticationGuard,
    AuthorizationGuard,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
