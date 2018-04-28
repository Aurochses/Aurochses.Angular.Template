import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule,
  MatSelectModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { TranslateModule } from '@ngx-translate/core';

import { AuthenticationModule } from '@aurochses/angular-auth';

import { Environment } from './models/environment.model';
import { TemplateSettings } from './models/template-settings.model';
import { TemplateService } from './services/template.service';
import { TemplateComponent } from './template.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { LogoComponent } from './toolbar/logo/logo.component';
import { I18nComponent } from './toolbar/i18n/i18n.component';
import { FullScreenComponent } from './toolbar/full-screen/full-screen.component';
import { ApplicationsComponent } from './toolbar/applications/applications.component';
import { NotificationsComponent } from './toolbar/notifications/notifications.component';
import { UserComponent } from './toolbar/user/user.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './sidenav/menu/menu.component';
import { MenuItemComponent } from './sidenav/menu/item/menu-item.component';
import { TitleComponent } from './sidenav/title/title.component';

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
    MatSelectModule,
    FlexLayoutModule,
    TranslateModule,
    AuthenticationModule
  ],
  declarations: [
    TemplateComponent,
    ToolbarComponent,
    LogoComponent,
    I18nComponent,
    FullScreenComponent,
    ApplicationsComponent,
    NotificationsComponent,
    UserComponent,
    SidenavComponent,
    MenuComponent,
    MenuItemComponent,
    TitleComponent
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
  static forRoot(environment: Environment, templateSettings: TemplateSettings): ModuleWithProviders {
    return {
      ngModule: TemplateModule,
      providers: [
        { provide: Environment, useValue: environment },
        { provide: TemplateSettings, useValue: templateSettings }
      ]
    };
  }
}
