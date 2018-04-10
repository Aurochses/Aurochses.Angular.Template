import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';

import { TemplateService } from './services/template.service';
import { TemplateComponent } from './template.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { LogoComponent } from './toolbar/logo/logo.component';

import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  declarations: [
    TemplateComponent,
    ToolbarComponent,
    LogoComponent,
    SidenavComponent
  ],
  providers: [
    TemplateService
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
