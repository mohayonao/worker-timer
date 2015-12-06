var WorkerTimer = require("../");

describe("WorkerTimer", function() {
  var timerId;

  function assert(value) {
    if (value !== true) {
      throw new Error("assertion error");
    }
  }

  afterEach(function() {
    WorkerTimer.clearInterval(timerId);
    WorkerTimer.clearTimeout(timerId);
  });

  it("setInterval(callback: function, delay: number): number", function(done) {
    var passed = 0;

    timerId = WorkerTimer.setInterval(function() {
      passed += 1;
    }, 25);

    assert(typeof timerId === "number");

    setTimeout(function() {
      assert(passed >= 10);
      done();
    }, 500);
  });
  it("clearInterval(timerId: number): number", function(done) {
    var passed = 0, savedPassed = 0;

    timerId = WorkerTimer.setInterval(function() {
      passed += 1;
    }, 25);

    assert(typeof timerId === "number");

    setTimeout(function() {
      WorkerTimer.clearInterval(timerId);

      savedPassed = passed;

      setTimeout(function() {
        assert(passed === savedPassed);
        done();
      }, 250);
    }, 250);
  });
  it("setTimeout(callback: function, delay: number): number", function(done) {
    var passed = 0;

    timerId = WorkerTimer.setTimeout(function() {
      passed += 1;
    }, 25);

    assert(typeof timerId === "number");

    setTimeout(function() {
      assert(passed === 1);
      done();
    }, 500);
  });
  it("clearTimeout(timerId: number): void", function(done) {
    var passed = 0;

    timerId = WorkerTimer.setTimeout(function() {
      passed += 1;
    }, 25);

    WorkerTimer.clearTimeout(timerId);

    setTimeout(function() {
      assert(passed === 0);
      done();
    }, 500);
  });
});
