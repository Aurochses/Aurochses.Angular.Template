import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule } from '@angular/material';

import { TemplateService } from './services/template.service';
import { TemplateComponent } from './template.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { LogoComponent } from './toolbar/logo/logo.component';
import { FullScreenComponent } from './toolbar/full-screen/full-screen.component';
import { ApplicationsComponent } from './toolbar/applications/applications.component';
import { NotificationsComponent } from './toolbar/notifications/notifications.component';
import { UserComponent } from './toolbar/user/user.component';

import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule
  ],
  declarations: [
    TemplateComponent,
    ToolbarComponent,
    LogoComponent,
    FullScreenComponent,
    ApplicationsComponent,
    NotificationsComponent,
    UserComponent,
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
