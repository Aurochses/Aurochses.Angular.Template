import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    AuthenticationGuard,
    AuthorizationGuard
} from '@aurochses/angular-auth';

import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            icon: 'home',
            title: 'MENU.HOME'
        }
    },
    {
        path: 'other',
        component: OtherComponent,
        data: {
            icon: 'dashboard',
            title: 'MENU.OTHER'
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
                    permissions: ['fakePermission']
                }
            }
        ]
    },
    {
        path: 'second',
        component: OtherComponent,
        canActivate: [
            AuthenticationGuard,
            AuthorizationGuard
        ],
        data: {
            icon: 'home',
            title: 'MENU.HOME'
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
    ]
})
export class AppRoutesModule { }
