import { Component } from '@angular/core';

import { TemplateService } from './services/template.service';

@Component({
  selector: 'aur-template',
  templateUrl: './template.component.html',
  styleUrls: ['template.component.scss'],
})
export class TemplateComponent {

  constructor(private templateService: TemplateService) { }

}
