import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';

type Chapter = {
  title: string;
  suite?: string;
  results?: any;
  link?: string;
}

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  chapters: Chapter[] = [
    { 
      title: 'A service',
      suite: 'HighScoreService',
      link: 'service-test'
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

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.resultsService.results.subscribe((result) => {
      this.chapters.forEach((chapter) => { 
        chapter.results = result[`"${chapter.suite}"`];
      });
    });
  }
}
