import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
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
  });

  it('should send feedback', () => {
    const feedback = {
      user: 'bender@planetexpress.com',
      feedback: 'destroy all humans',
      date: '1/1/3000'
    }
    service.sendFeedback(feedback).subscribe();
  });

  it('should not send feedback if an email isn\'t supplied', () => {
  });

  it('it should send a date, in the format month/day', () => {
  });

  it('should need a jacket if the weather is cold', () => {
  });

  it('should need a jacket if the weather is rainy', () => {
  });

  it('should always need a jacket in Melbourne', () => {
  });

  it('should not need a jacket in all other cases', () => {
  });

  it('should be up', () => {
  });

  it('should be down', () => {
  });

  afterEach(() => {
    http.verify();
  })
});
