import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpService } from './http.service';

fdescribe('HttpService', () => {
  let http: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
     imports:[ HttpClientTestingModule ]
    });

    http = TestBed.get(HttpTestingController);
    service = TestBed.get(HttpService);
  });

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  it('should make a request', () => {
    service.makeRequest().subscribe();
    http.expectOne('/foo');
  });

  it('should send feedback', () => {
    const feedback = {
      user: 'bender@planetexpress.com',
      feedback: 'destroy all humans',
      date: '1/1/3000'
    }
    service.sendFeedback(feedback).subscribe();

    const details = http.expectOne('/feedback').request;
    expect(details.method).toBe('POST');
    expect(details.headers.get('Authorization')).toBe('totes legit');
    expect(details.body).toEqual({
      user: 'bender@planetexpress.com',
      feedback: 'destroy all humans',
      date: '3000-01-01'
    });
  });

  afterEach(() => {
    http.verify();
  })
});
