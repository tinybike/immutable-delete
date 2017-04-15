"use strict";

var cp = require("child_process");
var gulp = require("gulp");

gulp.task("lint", function (callback) {
  cp.exec("npm run lint", function (err, stdout) {
    if (err) if (stdout) process.stdout.write(stdout);
    callback(err);
  });
});

gulp.task("build", function (callback) {
  cp.exec("./node_modules/browserify/bin/cmd.js ./exports.js | ./node_modules/uglify-js/bin/uglifyjs > ./dist/immutable-delete.min.js", function (err, stdout) {
    if (err) throw err;
    if (stdout) process.stdout.write(stdout);
    cp.exec("./node_modules/browserify/bin/cmd.js ./exports.js > ./dist/immutable-delete.js", function (err, stdout) {
      if (err) throw err;
      if (stdout) process.stdout.write(stdout);
      callback();
    });
  });
});

gulp.task("default", ["lint", "build"]);
