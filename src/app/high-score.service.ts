import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighScoreService {

  constructor() { }

  set score(score: number) {
    if (score > this.score) {
      sessionStorage.setItem('high-score', `${score}`);
    }
  }

  get score() {
    return Number(sessionStorage.getItem('high-score')) || 0;
  }
}
