export default class FakeServer {
  constructor(expectations = {}) {
    this.expectations = expectations;
    this.serve = this.serve.bind(this);
  }

  expect(url, response) {
    this.expectations[url] = response;
  }

  serve(url) {
    const expected = this.expectations[url];
    if (expected) {
      return Promise.resolve({
        json: () => Promise.resolve(expected)
      });
    } else {
      return Promise.reject("not found");
    }
  }

  reset() {
    this.expectations = {};
  }

  start() {
    /*eslint no-undef: "off"*/
    global.fetch = jest.fn().mockImplementation(this.serve);
  }

  stop() {
    /*eslint no-undef: "off"*/
    global.fetch.mockClear();
    /*eslint no-undef: "off"*/
    delete global.fetch;
  }
}
