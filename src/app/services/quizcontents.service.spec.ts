import { TestBed } from '@angular/core/testing';

import { QuizcontentsService } from './quizcontents.service';

describe('QuizcontentsService', () => {
  let service: QuizcontentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizcontentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
