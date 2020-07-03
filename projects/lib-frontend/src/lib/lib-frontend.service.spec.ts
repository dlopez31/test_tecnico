import { TestBed } from '@angular/core/testing';

import { LibFrontendService } from './lib-frontend.service';

describe('LibFrontendService', () => {
  let service: LibFrontendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibFrontendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
