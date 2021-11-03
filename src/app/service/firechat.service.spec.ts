import { TestBed } from '@angular/core/testing';

import { FirechatService } from './firechat.service';

describe('FirechatService', () => {
  let service: FirechatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirechatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
