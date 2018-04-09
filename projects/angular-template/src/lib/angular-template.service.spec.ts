import { TestBed, inject } from '@angular/core/testing';

import { AngularTemplateService } from './angular-template.service';

describe('AngularTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularTemplateService]
    });
  });

  it('should be created', inject([AngularTemplateService], (service: AngularTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
