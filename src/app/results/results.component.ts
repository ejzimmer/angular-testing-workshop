import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() results: any;

  constructor() { }

  ngOnInit() { 
  }

  getStatus(test) {
    if (test.pending || test.skipped || test.executedExpectationsCount === 0) {
      return;
    }

    return test.success ? 'passing' : 'failing';
  }
}
