import { TestBed } from '@angular/core/testing';

import { DataInteService } from './data-inte.service';

describe('DataInteService', () => {
  let service: DataInteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataInteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
