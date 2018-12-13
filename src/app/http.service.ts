import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  makeRequest() {
    return this.http.get('/foo');
  }

  sendFeedback(feedback) {
    return this.http.post('/feedback', { feedback }, { 
      headers: {
        'Authorization': 'totes legit'
      }
    })
  }
}
