import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';
import { HighScoreService } from '../high-score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  score: number;
  highScore: number;

  constructor(private resultsService: ResultsService, private highScoreService: HighScoreService) { 
    this.highScore = this.highScoreService.score;
  }

  ngOnInit() {
    this.resultsService.results.subscribe((results) => {
      this.score = ScoreComponent.sumSuiteScores(Object.values(results));
      this.highScoreService.score = this.score;
      this.highScore = this.highScoreService.score;
    });
  }

  static sumSuiteScores(suites: any[]): number {
    return suites.reduce((total, suite) => total + ScoreComponent.sumTestScores(suite), 0)
  }


  static sumTestScores(suite: any[]): number {
    return suite.reduce((total, test) => {
      if (test.success) {
        return total + (5 * test.executedExpectationsCount);
      } else {
        return total + test.executedExpectationsCount;
      }
    }, 0)
  }
}
