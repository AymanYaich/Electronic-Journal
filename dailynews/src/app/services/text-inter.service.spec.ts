import { TestBed } from '@angular/core/testing';

import { TextInterService } from './text-inter.service';

describe('TextInterService', () => {
  let service: TextInterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextInterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
