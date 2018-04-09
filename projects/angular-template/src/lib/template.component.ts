import { Component, OnInit, HostListener } from '@angular/core';

import { TemplateService } from './services/template.service';

@Component({
  selector: 'aur-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    const bodyWidth: number = document.body.clientWidth;
    if (bodyWidth > 960) {
      if (this.templateService.settings.sidenav.mode !== 'side') {
        this.templateService.settings.sidenav.open = true;
      }
      this.templateService.settings.sidenav.mode = 'side';
    } else if (bodyWidth <= 960 && bodyWidth > 600) {
      this.templateService.settings.sidenav.mode = 'over';
      this.templateService.settings.sidenav.open = false;
    }
  }

}
