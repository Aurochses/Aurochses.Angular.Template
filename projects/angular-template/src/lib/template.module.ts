import { NgModule } from '@angular/core';

import { MatToolbarModule, MatIconModule } from '@angular/material';

import { ToolbarComponent } from './toolbar/toolbar.component';

import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [
    TemplateComponent,
    ToolbarComponent
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
