import { Component } from '@angular/core';

import { TemplateService } from '../services/template.service';

@Component({
  selector: 'aur-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
})
export class ToolbarComponent {

  constructor(public templateService: TemplateService) { }

}
