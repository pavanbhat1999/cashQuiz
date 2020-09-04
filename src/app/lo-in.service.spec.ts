import { TestBed } from '@angular/core/testing';

import { LoInService } from './lo-in.service';

describe('LoInService', () => {
  let service: LoInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
