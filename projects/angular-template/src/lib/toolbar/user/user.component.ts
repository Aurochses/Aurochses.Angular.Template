import { Component } from '@angular/core';

import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'aur-toolbar-user',
  templateUrl: './user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent {

  constructor(private templateService: TemplateService) { }

}
