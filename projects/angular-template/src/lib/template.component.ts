import { Component, OnInit } from '@angular/core';

import { TemplateService } from './services/template.service';

@Component({
  selector: 'aur-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
  }

}
