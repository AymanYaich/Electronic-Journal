import { TestBed } from '@angular/core/testing';

import { TypeOfService } from './type-of.service';

describe('TypeOfService', () => {
  let service: TypeOfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
