"use strict";

/**
 * Shallow copy an object, excluding one or more of its keys.
 *
 * @param {Object} originalObject Object from which to remove a key.
 * @param {string|string[]} excludeKey Key or array of keys to remove from originalObject.
 * @return {Object} Shallow copy of originalObject without excludeKey.
 */
module.exports = function (originalObject, excludeKey) {
  return Object.keys(originalObject).reduce(function (objectWithoutExcludedKey, key) {
    if (Array.isArray(excludeKey)) {
      if (excludeKey.indexOf(key) === -1) objectWithoutExcludedKey[key] = originalObject[key];
    } else {
      if (key !== excludeKey) objectWithoutExcludedKey[key] = originalObject[key];
    }
    return objectWithoutExcludedKey;
  }, {});
};
