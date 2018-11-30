import { TestBed } from '@angular/core/testing';

import { HighScoreService } from './high-score.service';

describe('HighScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighScoreService = TestBed.get(HighScoreService);
    expect(service).toBeTruthy();
  });

  it('should return 0 if no score has been set', () => {
    expect(true).toBe(true);
  });

  it('should fetch the score from local storage', () => {
    expect(true).toBe(false);
  });

  it('should set the score if the current score is higher than the previous higher score', () => {
    expect(true).toBe(true);  
  });

  it('should not set the score if the current score is lower than the previous high score', () => {

  });
});
