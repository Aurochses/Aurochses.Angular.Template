import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { TemplateSettings } from './models/template-settings.model';
import { TemplateService } from './services/template.service';
import { TemplateComponent } from './template.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { LogoComponent } from './toolbar/logo/logo.component';
import { FullScreenComponent } from './toolbar/full-screen/full-screen.component';
import { ApplicationsComponent } from './toolbar/applications/applications.component';
import { NotificationsComponent } from './toolbar/notifications/notifications.component';
import { UserComponent } from './toolbar/user/user.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './sidenav/menu/menu.component';

import { BreadcrumbsComponent } from './sidenav/breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule
  ],
  declarations: [
    TemplateComponent,
    ToolbarComponent,
    LogoComponent,
    FullScreenComponent,
    ApplicationsComponent,
    NotificationsComponent,
    UserComponent,
    SidenavComponent,
    MenuComponent,
    BreadcrumbsComponent
  ],
  providers: [
    TemplateService,
    MenuService
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule {
  static forRoot(templateSettings: TemplateSettings): ModuleWithProviders {
    return {
      ngModule: TemplateModule,
      providers: [
        { provide: TemplateSettings, useValue: templateSettings }
      ]
    };
  }
}
