import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  results = new Subject<any>();
  private connection: EventSource;

  constructor(private http: HttpClient) { 
    this.connection = new EventSource('http://localhost:7000/connect');
    this.connection.addEventListener('message', () => {
      this.getResults();
    });
    this.getResults();
  }

  getResults() {
    this.http.get('http://localhost:7000/results')
      .subscribe((data: any) => {
        const results = JSON.parse(data);
        const resultList = Object.values(results.result)[0] as Array<any>;
        const result = resultList.reduce((suites: any, test) => {
          const suite = test.suite[0];
          if (!suites[`"${suite}"`]) {
            suites[`"${suite}"`] = [];
          }
          suites[`"${suite}"`].push(test);
          return suites;
        }, {});
        this.results.next(result);
      })
  }
}
