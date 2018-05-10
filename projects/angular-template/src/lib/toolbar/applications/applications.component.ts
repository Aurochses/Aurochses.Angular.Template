import { Component, OnInit } from '@angular/core';

import { TemplateService } from '../../services/template.service';
import { ApplicationsService } from '../../services/applications.service';
import { ApplicationModel } from '../../models/application.model';

@Component({
  selector: 'aur-toolbar-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  applications: Array<ApplicationModel>;

  constructor(private templateService: TemplateService, private applicationService: ApplicationsService) { }

  ngOnInit() {
    this.applicationService.getApplications()
      .subscribe(
        (applications) => {
          if (
            !this.templateService.settings.toolbar.applications.current
            || !this.templateService.settings.toolbar.applications.current.showInMenu
          ) {
            this.applications = applications.filter(
              (application) => {
                return application.id.toString() !== this.templateService.settings.toolbar.applications.current.id.toString();
              }
            );
          } else {
            this.applications = applications;
          }
        }
      );
  }

}
