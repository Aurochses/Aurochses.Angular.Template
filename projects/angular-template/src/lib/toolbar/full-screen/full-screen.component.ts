import { Component } from '@angular/core';

import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'aur-toolbar-full-screen',
  templateUrl: './full-screen.component.html'
})
export class FullScreenComponent {

  constructor(private templateService: TemplateService) { }

}
