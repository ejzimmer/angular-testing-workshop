import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    // feedback.date = moment(feedback.date).format();
    feedback.date = '3000-01-01';
    return this.http.post('/feedback', { feedback }, { 
      headers: {
        'Authorization': 'totes legit'
      }
    })
  }
}
