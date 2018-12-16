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
    {
      title: 'A service with dependencies',
      suite: 'DependencyService',
      link: 'service-dependency-test',
      tests: [
        'should be created',
        'should get the value from the unannotated service',
        'should get the combined emoji from the annoying initiation service',
        'should get an emoji from the list',
        'should call for help',
      ]
    },
    { 
      title: 'A service that does something asynchronously',
      suite: 'AsyncService',
      link: 'service-async-test',
      tests: [
        'should be created',
        'should send back an echo',
        'should spin for a second, if the given promise takes less than a second to resolve',
        'should spin until the given promise resolves, if the promise takes more than one second',
        'should stop spinning if the given promise is rejected and a second has passed',
        'should continue spinning until all given promises are resolved or rejected',
        'should stop spinning after one second if all the promises have resolved or rejected in less than one second'
      ]
    },
    { 
      title: 'A service that uses HTTP',
      suite: '',
      link: 'service-http-test',
      tests: [

      ]
    },
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
