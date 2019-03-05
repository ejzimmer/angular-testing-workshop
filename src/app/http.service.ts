import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  makeRequest() {
    return this.http.get('/foo');
  }

  sendFeedback(feedback) {
    if (!feedback.user) {
      return of({});
    }

    const details = Object.assign({}, feedback, { date: moment(feedback.date).format('YYYY-MM-DD') });
    return this.http.post('/feedback', details, { 
      headers: {
        'Authorization': 'totes legit'
      }
    })
  }

  amIOldEnough({ day, month, year }) {
    return this.http.get(`/birthday/${year}/${month}/${day}`);
  }

  doINeedAJacket(city: string): Observable<string> {
    if (city.toLowerCase() === 'melbourne') {
      return of('yes');
    }
    return this.http.get<string>('/weather', { params: { city }})
      .pipe(
        map(weather => {
          if (weather.includes('cold') || weather.includes('rainy')) {
            return 'yes';
          }

          return 'no';
        })
      )
  }

  isItDown(url: string): Observable<boolean> {
    const status = new Subject<boolean>();

    this.http.get(url).subscribe(
      () => status.next(false),  // return false on a successful response
      () => status.next(true)  // return true on an error response
    )

    return status;
  }
}
