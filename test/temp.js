/*
  A description.
  More information.
*/

"use strict";

const chai = require("chai");
const assert = chai.assert;

const lib = require('../index.js');

describe("Tests", () => {
  describe("Sum", () => {
    it("sums two integers", async () => {
      const result = lib.sum(2,3);

      assert(result, 5, "2+3=5");
    });
  });

  describe("Hello", () => {
    it("Says hello chris", async () => {
      const result = lib.sayHi('Chris');

      assert(result, 'Hello Chris', 'Should say: Hello Chris');
    })
  })
});
