import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import {
  AuthenticationModule,
  AuthenticationService,
  AuthenticationGuard,
  AuthorizationGuard,
  AuthenticationComponent,
  RenewComponent
} from '@aurochses/angular-auth';
import { authenticationSettings } from '../environments/authentication-settings';

import { AppComponent } from './app.component';

import { TemplateModule } from '@aurochses/angular-template';
import { templateSettings } from '../environments/template-settings';

import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      icon: 'home',
      title: 'Home'
    }
  },
  {
    path: 'other',
    component: OtherComponent,
    data: {
      icon: 'dashboard',
      title: 'Other'
    },
    children: [
      {
        path: 'subOther',
        component: OtherComponent,
        canActivate: [
          AuthenticationGuard,
          AuthorizationGuard
        ],
        data: {
          icon: 'person',
          title: 'Sub Other',
          permissions: [ 'fakePermission' ]
        }
      }
    ]
  },
  {
    path: 'auth',
    component: AuthenticationComponent
  },
  {
    path: 'renew',
    component: RenewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AuthenticationModule.forRoot(environment, authenticationSettings),
    TemplateModule.forRoot(templateSettings),
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
