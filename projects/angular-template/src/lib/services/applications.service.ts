import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TemplateService } from './template.service';
import { ApplicationModel } from '../models/application.model';

@Injectable()
export class ApplicationsService {

  constructor(private httpClient: HttpClient, private templateService: TemplateService) { }

  getApplications(): Observable<Array<ApplicationModel>> {
    return this.httpClient.get<Array<ApplicationModel>>(this.templateService.settings.toolbar.applications.url);
  }

}
