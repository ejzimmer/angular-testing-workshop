import { TestBed, async, fakeAsync, tick, flushMicrotasks, flush } from '@angular/core/testing';

import { AsyncService } from './async.service';

// do discardPeriodicTasks in the Observables one

describe('AsyncService', () => {
  let service;

  beforeEach(() => { 
    TestBed.configureTestingModule({});
    service = TestBed.get(AsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send back an echo', () => {
    // service.echo('coo-ee', 500)...
  });

  /*
   * You can use this promise to pass in to start the
   * spinner spinning. Then you can resolve it or reject
   * it by calling resolve or reject.
   */
  describe('spinner', () => {
    let promise;
    let resolve;
    let reject;

    beforeEach(() => {
      promise = new Promise((r, x) => { 
                    resolve = r; 
                    reject = x
      });
    })

    it('should spin for a second, if the given promise takes less than a second to resolve', () => {
      // start the spinner spinning
      // resolve the Promise
      // run all the async callbacks
      // check the spinner has stopped
      // check how long it all took
    });

    it('should spin until the given promise resolves, if the promise takes more than one second', () => {
      // start the spinner spinning
      // advance time!
      // is the spinner still spinning?
      // resolve the Promise and run callbacks
      // has the spinner stopped?
    });

    it('should stop spinning if the given promise is rejected and a second has passed', () => {
      // previousTest.replace('resolve', 'reject');
    });

    describe('already spinning', () => {
      let anotherPromise;
      let resolveAnotherPromise;

      beforeEach(() => {
        anotherPromise = new Promise(r => resolveAnotherPromise = r);
      })

      it('should continue spinning until all given promises are resolved or rejected', () => {
        // start the spinner spinning
        // give it another promise
        // go to the future
        // resolve a Promise and run its callback
        // is the spinner still spinning?
        // resolve another Promise and run its callback
        // has the spinner stopped?
      });

      it('should stop spinning after one second if all the promises have resolved or rejected in less than one second', () => {
        // start the spinner, and give it a second promise
        // reject or resolve the promises and run their callbacks
        // is the spinner still spinning
        // advance time by one second
        // has the spinner stopped?
      });
    });

  });
});
