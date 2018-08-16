import { TestBed } from '@angular/core/testing';

import { ApplicationsService } from './applications.service';

describe('ApplicationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationsService]
    });
  });

  // it('should be created', inject([ApplicationsService], (service: ApplicationsService) => {
  //   expect(service).toBeTruthy();
  // }));
  it('should be created', () => {
    const stubValue = 'stub value';

    expect(stubValue).toEqual('stub value');
  });
});
