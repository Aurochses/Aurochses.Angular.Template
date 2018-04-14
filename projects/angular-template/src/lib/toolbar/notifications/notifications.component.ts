import { Component } from '@angular/core';

import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'aur-toolbar-notifications',
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent {

  constructor(private templateService: TemplateService) { }

}
