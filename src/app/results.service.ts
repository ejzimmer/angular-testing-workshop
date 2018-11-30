import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  results = new Subject<any>();
  private connection: EventSource;

  constructor() { 
    this.connection = new EventSource('http://localhost:7000/connect');
    this.connection.addEventListener('message', (message: any) => {
      // It's double JSON encoded. Look, I don't know why.
      const data = JSON.parse(JSON.parse(message.data));

      // The result's in an inconvenient format. Don't worry about it.
      const resultList = Object.values(data.result)[0] as Array<any>;

      const result = resultList.reduce((suites: any, test) => {
        const suite = test.suite[0];
        if (!suites[`"${suite}"`]) {
          suites[`"${suite}"`] = [];
        }
        suites[`"${suite}"`].push(test);
        return suites;
      }, {});
      this.results.next(result);
    });    
  }
}
