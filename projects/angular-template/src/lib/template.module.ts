import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material';

import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    MatToolbarModule
  ],
  declarations: [TemplateComponent],
  exports: [TemplateComponent]
})
export class TemplateModule { }
