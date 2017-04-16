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
