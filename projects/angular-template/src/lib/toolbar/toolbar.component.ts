import { Component } from '@angular/core';

import { TemplateService } from '../services/template.service';

@Component({
  selector: 'aur-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {

  constructor(private templateService: TemplateService) { }

}
