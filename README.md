You'll need at least Node 8.

1. `npm install` to install the dependencies
2. `npm start` to start the Angular app and the Express server
3. `npm test` to start Karma running
4. Open `localhost:4200` in your browser

Each 'light' on the panel represents a test you need to get running.
A green light is a passing test, a red light is a failing test, and 
and unlit light is a test that doesn't have any `expect`s in it.

Click the panels and follow the instructions to get all the tests working.

If you're wondering how it works, Karma outputs its results to a JSON file.
The Express server watches the file, and every time the file is updated, the
server notifies the app through the power of Server Sent Events and hacks.
The app checks each test result to ensure it has a passing test with at least
one `expect` in it.

Yes, you could just add `expect(true).toBe(true)` to every test, and light 
up all the lights. Knock yourself out if you think that's the best use of
your time ;-).

I've only written the first couple of sections so far. If people find this
helpful (and interesting), I'll carry on with the rest.