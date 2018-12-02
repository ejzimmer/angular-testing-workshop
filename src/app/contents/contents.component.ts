import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ResultsService } from '../results.service';
import { Subscription } from 'rxjs';

type Chapter = {
  title: string;
  suite?: string;
  results?: any;
  link?: string;
  tests?: string[];
}

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  subscription: Subscription;
  chapters: Chapter[] = [
    { 
      title: 'A service',
      suite: 'HighScoreService',
      link: 'service-test',
      tests: [
        'should be created',
        'should return 0 if no score has been set',
        'should fetch the score from local storage',
        'should set the score if the current score is higher than the previous higher score',
        'should not set the score if the current score is lower than the previous high score'
      ]
    },
    { title: 'A service with dependencies' },
    { title: 'A service that uses HTTP' },
    { title: 'A service that does something asynchronously' },
    { title: 'A service with Observables' },
    { 
      title: 'A component',
      suite: 'AppComponent'
    },
    { title: 'A component with dependencies' },
    { title: 'A component with other components inside' },
    { title: 'A component with inputs and outputs' },
    { title: 'A component that does something asynchronously' },
    { title: 'A component with Observables' }
  ]

  constructor(private resultsService: ResultsService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.resultsService.results.subscribe((result) => {
      this.chapters.forEach((chapter) => { 
        chapter.results = result[`"${chapter.suite}"`];
      });
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
