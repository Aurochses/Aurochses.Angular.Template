import { Component } from '@angular/core';

import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'aur-toolbar-applications',
  templateUrl: './applications.component.html'
})
export class ApplicationsComponent {

  constructor(private templateService: TemplateService) { }

}
