import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ItemComponent } from './nested/item.component';
import { Item2Component } from './nested/item2.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './list/add.component';
import { SecureComponent } from './secure/secure.component';

@NgModule({
  declarations: [
    HomeComponent,
    ItemComponent,
    Item2Component,
    ListComponent,
    AddComponent,
    SecureComponent
  ],
  imports: [
    RouterModule
  ]
})
export class MainModule { }
