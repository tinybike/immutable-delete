(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var immutableDelete = global.immutableDelete || require("./src");
global.immutableDelete = immutableDelete;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src":2}],2:[function(require,module,exports){
"use strict";

/**
 * Shallow copy an object, excluding one of its keys.
 *
 * @param {Object} originalObject Object from which to remove a key.
 * @param {string} excludeKey Key to remove from originalObject.
 * @return {Object} Shallow copy of originalObject without excludeKey.
 */
module.exports = function (originalObject, excludeKey) {
  return Object.keys(originalObject).reduce(function (objectWithoutExcludedKey, key) {
    if (key !== excludeKey) objectWithoutExcludedKey[key] = originalObject[key];
    return objectWithoutExcludedKey;
  }, {});
};

},{}]},{},[1]);
