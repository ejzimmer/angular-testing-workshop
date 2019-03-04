import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

// import * as moment from 'moment';

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

    // feedback.date = moment(feedback.date).format();
    const details = Object.assign({}, feedback, { date: '3000-01-01' });
    return this.http.post('/feedback', details, { 
      headers: {
        'Authorization': 'totes legit'
      }
    })
  }

  amIOldEnough({ day, month, year }) {
    return this.http.get(`/birthday/${year}/${month}/${day}`);
  }

  getWeather(city: string) {
    return this.http.get('/weather', { params: { city }})
  }
}
