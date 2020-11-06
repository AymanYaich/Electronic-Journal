import { TestBed } from '@angular/core/testing';

import { StateOneNewsService } from './state-one-news.service';

describe('StateOneNewsService', () => {
  let service: StateOneNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateOneNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
