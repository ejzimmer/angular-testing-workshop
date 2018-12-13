import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  spinning: Promise<void>;
  resolve: Function;
  private waitingFor: Promise<any>[] = [];

  constructor() { }

  echo(words: string, delay: number): Promise<string> {

    // This is just converting setTimeout into a Promise
    // We return the Promise, which resolves after the delay.
    // The Promise resolves to the value we passed in
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(words);
      }, delay)
    });
  }

  async spin(waitFor) { 

    
    /*
     * If the spinner isn't spinning already, we want to create a 
     * promise that is going to resolve once the spinner is ready 
     * to stop.
     * 
     * We're going to store a reference to the resolve function of
     * this Promise, so we can resolve it later, when we're ready.
     * 
     * Then, we'll create a list to store all the Promises that need
     * to resolve before the spinner stops spinning, and we'll add
     * a Promise to that list that's just going to resolve itself
     * after 1 second, to give us our 1 second minimum.
     */
    if (!this.spinning) {
      this.spinning = new Promise(resolve => this.resolve = resolve);
      this.waitingFor = [];
      this.addDelay();
    }
    
    /*
     * We're going to use Promise.all to keep track of our promises.
     * Promise.all takes an array of Promises and returns a Promise 
     * that resolves once all the Promises in the array have resolved.
     * 
     * The problem is, if any of the Promises in the array are rejected,
     * Promise.all's returned Promise will immediately be rejected, without
     * waiting for any of the other Promises. So, we're going to be a
     * little sneaky, and make sure our Promises always resolve. We wrap
     * them up in another Promise, which resolves whenever the inner Promise
     * resolves or rejects (Promise.prototype.finally is called after either
     * event).
     * 
     * Then we add our wrapped Promise to the list of Promises we're 
     * waiting for.
     */
    const wrappedPromise = new Promise((resolve) => waitFor.finally(resolve));
    this.waitingFor.push(wrappedPromise);

    /*
     * Wait for all the Promises to resolve, then resolve our
     * original promise, signifying that the spinner is done.
     * 
     * What's the length check for? Promise.all will only wait for the
     * Promises that were in the array when Promise.all was called. If
     * our function gets called again, and we add another Promise to the
     * list, Promise.all will ignore it. Instead, we need to all Promise.all
     * again every time we add a new Promise.
     * 
     * However, there's no way to cancel a Promise, so all the old
     * Promise.alls will still run to completion. We don't want our original
     * Promise to resolve until the last Promise.all has resolve though, so 
     * we need to check that that number of Promises that Promise.all has 
     * resolved is the same as the number we currenlty have in our list.
     * 
     * I told you this was complicated.
     */
    const result = await Promise.all(this.waitingFor);
    if (result.length === this.waitingFor.length) {
      this.resolve();
      this.spinning = null;
    }

    return this.spinning;
  }

  /*
   * This one's simple at least. Create a Promise that resolves
   * after one second, and add it to our list of Promises.
   */
  addDelay() {
    this.waitingFor.push(new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }));
  }
}
