import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AuthenticationModule } from '@aurochses/angular-auth';

import { TemplateModule } from '@aurochses/angular-template';

import { environment } from '../environments/environment';

import { AppRoutesModule } from './app-routes.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AuthenticationModule.forRoot(environment, environment.authenticationSettings),
    TemplateModule.forRoot(environment, environment.templateSettings),
    AppRoutesModule,
    MainModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
