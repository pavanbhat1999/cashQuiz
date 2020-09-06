import { TestBed } from '@angular/core/testing';

import { QuestionPageService } from './question-page.service';

describe('QuestionPageService', () => {
  let service: QuestionPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
