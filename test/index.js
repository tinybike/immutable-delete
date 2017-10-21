"use strict";

var test = require("tape");
var async = require("async");
var immutableDelete = require("../src");

var noop = function () {};

var runtest = function (t) {
  var originalObject = t.params.originalObject;
  t.assertions(originalObject, immutableDelete(originalObject, t.params.excludeKey));
};

test("One-level object", function (t) {
  var testCases = [{
    params: {
      originalObject: { key1: "value1", key2: "value2" },
      excludeKey: "key1"
    },
    assertions: function (originalObject, objectWithoutExcludedKey) {
      t.deepEqual(originalObject, { key1: "value1", key2: "value2" }, "original object unchanged");
      t.deepEqual(objectWithoutExcludedKey, { key2: "value2" }, "remove key from object");
    }
  }, {
    params: {
      originalObject: { key1: "value1" },
      excludeKey: "key1"
    },
    assertions: function (originalObject, objectWithoutExcludedKey) {
      t.deepEqual(originalObject, { key1: "value1" }, "original object unchanged");
      t.deepEqual(objectWithoutExcludedKey, {}, "remove last key from object");
    }
  }, {
    params: {
      originalObject: { key1: "value1", key2: "value2" },
      excludeKey: "key3"
    },
    assertions: function (originalObject, objectWithoutExcludedKey) {
      t.deepEqual(originalObject, { key1: "value1", key2: "value2" }, "original object unchanged");
      t.deepEqual(objectWithoutExcludedKey, { key1: "value1", key2: "value2" }, "object unchanged, key does not exist");
    }
  }, {
    params: {
      originalObject: { key1: "value1", key2: noop },
      excludeKey: "key1"
    },
    assertions: function (originalObject, objectWithoutExcludedKey) {
      t.deepEqual(originalObject, { key1: "value1", key2: noop }, "original object unchanged");
      t.deepEqual(objectWithoutExcludedKey, { key2: noop }, "remove key from object");
    }
  }, {
    params: {
      originalObject: { key1: "value1", key2: noop },
      excludeKey: "key2"
    },
    assertions: function (originalObject, objectWithoutExcludedKey) {
      t.deepEqual(originalObject, { key1: "value1", key2: noop }, "original object unchanged");
      t.deepEqual(objectWithoutExcludedKey, { key1: "value1" }, "remove key from object");
    }
  }, {
    params: {
      originalObject: { key1: "value1", key2: "value2", key3: "value3", key4: "value4" },
      excludeKey: ["key1", "key3"]
    },
    assertions: function (originalObject, objectWithoutExcludedKey) {
      t.deepEqual(originalObject, { key1: "value1", key2: "value2", key3: "value3", key4: "value4" }, "original object unchanged");
      t.deepEqual(objectWithoutExcludedKey, { key2: "value2", key4: "value4" }, "remove key from object");
    }
  }];
  async.each(testCases, function (testCase, nextTestCase) {
    runtest(testCase);
    nextTestCase();
  }, t.end);
});

test("Two-level object", function (t) {
  var testCases = [{
    params: {
      originalObject: { key1: "value1", key2: { key3: 3, key4: "value4" } },
      excludeKey: "key1"
    },
    assertions: function (originalObject, objectWithoutExcludedKey) {
      t.deepEqual(originalObject, { key1: "value1", key2: { key3: 3, key4: "value4" } }, "original object unchanged");
      t.deepEqual(objectWithoutExcludedKey, { key2: { key3: 3, key4: "value4" } }, "remove key from object");
    }
  }, {
    params: {
      originalObject: { key1: "value1", key2: { key3: 3, key4: "value4" } },
      excludeKey: "key2"
    },
    assertions: function (originalObject, objectWithoutExcludedKey) {
      t.deepEqual(originalObject, { key1: "value1", key2: { key3: 3, key4: "value4" } }, "original object unchanged");
      t.deepEqual(objectWithoutExcludedKey, { key1: "value1" }, "remove key from object");
    }
  }];
  async.each(testCases, function (testCase, nextTestCase) {
    runtest(testCase);
    nextTestCase();
  }, t.end);
});
