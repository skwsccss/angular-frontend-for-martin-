import { TestBed } from '@angular/core/testing';

import { BloPostService } from './blo-post.service';

describe('BloPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloPostService = TestBed.get(BloPostService);
    expect(service).toBeTruthy();
  });
});
