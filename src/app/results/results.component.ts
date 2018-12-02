import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() results: any;
  @Input() suite: string;
  @Input() tests: string[];

  constructor() { }

  ngOnInit() { 
  }

  getStatus(test) {
    const result = this.results && this.results.find(result => result.fullName === `${this.suite} ${test}`);
    if (!result) {
      return;
    }
    if (result.pending || result.skipped || result.executedExpectationsCount === 0) {
      return;
    }

    return result.success ? 'passing' : 'failing';
  }
}
