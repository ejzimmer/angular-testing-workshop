import { TestBed } from '@angular/core/testing';

import { HighScoreService } from './high-score.service';

describe('HighScoreService', () => {
  let service: HighScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(HighScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 if no score has been set', () => {

  });

  it('should fetch the score from local storage', () => {

  });

  it('should set the score if the current score is higher than the previous higher score', () => {

  });

  it('should not set the score if the current score is lower than the previous high score', () => {

  });
});
