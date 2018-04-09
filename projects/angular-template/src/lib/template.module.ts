import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatIconModule } from '@angular/material';

import { ToolbarComponent } from './toolbar/toolbar.component';

import { TemplateComponent } from './template.component';
import { TemplateService } from './services/template.service';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [
    TemplateComponent,
    ToolbarComponent
  ],
  providers: [
    TemplateService
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
