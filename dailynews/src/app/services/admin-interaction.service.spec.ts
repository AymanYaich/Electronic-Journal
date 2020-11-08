import { TestBed } from '@angular/core/testing';

import { AdminInteractionService } from './admin-interaction.service';

describe('AdminInteractionService', () => {
  let service: AdminInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
