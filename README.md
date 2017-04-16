# Immutable Delete

[![Build Status](https://travis-ci.org/tinybike/immutable-delete.svg)](https://travis-ci.org/tinybike/immutable-delete) [![Coverage Status](https://coveralls.io/repos/tinybike/immutable-delete/badge.svg?branch=master&service=github)](https://coveralls.io/github/tinybike/immutable-delete?branch=master) [![npm version](https://badge.fury.io/js/immutable-delete.svg)](https://badge.fury.io/js/immutable-delete)

A simple function that shallow copies an object, excluding one of its keys.

## Usage

```
npm install immutable-delete
```

```javascript
var immutableDelete = require("immutable-delete");

var originalObject = { key1: "value1", key2: "value2" };

console.log(immutableDelete(originalObject, "key1"));
// { key2: "value2" }

console.log(originalObject);
// { key1: "value1", key2: "value2" }
```

```html
<script src="dist/immutable-delete.min.js"></script>
```

## Tests

```
npm test
```
