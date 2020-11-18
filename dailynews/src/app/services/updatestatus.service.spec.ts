import { TestBed } from '@angular/core/testing';

import { UpdatestatusService } from './updatestatus.service';

describe('UpdatestatusService', () => {
  let service: UpdatestatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatestatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
