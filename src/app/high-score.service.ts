import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighScoreService {

  key = 'high-score';

  constructor() { }

  set score(score: number) {
    if (score > this.score) {
      localStorage.setItem(this.key, `${score}`);
    }
  }

  get score() {
    return Number(localStorage.getItem(this.key)) || 0;
  }
}
