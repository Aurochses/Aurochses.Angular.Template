import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard, AuthorizationGuard } from '@aurochses/angular-auth';

import { HomeComponent } from './main/home/home.component';
import { ItemComponent } from './main/nested/item.component';
import { Item2Component } from './main/nested/item2.component';
import { ListComponent } from './main/list/list.component';
import { AddComponent } from './main/list/add.component';
import { SecureComponent } from './main/secure/secure.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      icon: 'home',
      title: 'MENU.HOME',
      showMenuDividerAfter: true
    }
  },
  {
    path: 'nested',
    data: {
      icon: 'filter_none',
      title: 'MENU.NESTED'
    },
    children: [
      {
        path: '',
        redirectTo: 'first',
        pathMatch: 'full',
      },
      {
        path: 'first',
        component: ItemComponent,
        canActivate: [
          AuthenticationGuard,
          AuthorizationGuard
        ],
        data: {
          icon: 'crop_din',
          title: 'MENU.NESTED.ITEM'
        }
      },
      {
        path: 'second',
        component: Item2Component,
        canActivate: [
          AuthenticationGuard,
          AuthorizationGuard
        ],
        data: {
          icon: 'crop_din',
          title: 'MENU.NESTED.ITEM2'
        }
      }
    ]
  },
  {
    path: 'list',
    data: {
      icon: 'list',
      title: 'MENU.LIST',
    },
    children: [
      {
        path: '',
        component: ListComponent,
        canActivate: [
          AuthenticationGuard,
          AuthorizationGuard
        ]
      },
      {
        path: 'add',
        component: AddComponent,
        canActivate: [
          AuthenticationGuard,
          AuthorizationGuard
        ],
        data: {
          title: 'MENU.LIST.ADD',
          hideInMenu: true
        }
      }
    ]
  },
  {
    path: 'secure',
    component: SecureComponent,
    canActivate: [
      AuthenticationGuard,
      AuthorizationGuard
    ],
    data: {
      icon: 'security',
      title: 'MENU.SECURE',
      showMenuDividerBefore: true,
      permissions: ['fakePermission']
    }
  },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthenticationGuard,
    AuthorizationGuard
  ]
})
export class AppRoutesModule { }
