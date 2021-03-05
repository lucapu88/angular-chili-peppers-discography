import { TestBed } from '@angular/core/testing';

import { DiscographyService } from './discography.service';

describe('DiscographyService', () => {
  let service: DiscographyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscographyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
