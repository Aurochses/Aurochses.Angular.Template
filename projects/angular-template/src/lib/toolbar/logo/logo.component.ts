import { Component } from '@angular/core';

import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'aur-toolbar-logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent {

  constructor(public templateService: TemplateService) { }

}
