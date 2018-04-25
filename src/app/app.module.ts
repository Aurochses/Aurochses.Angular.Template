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
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
