"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadImage;
/* eslint consistent-return: 0 */

var isCached = function isCached(test) {
  return test.complete || test.width + test.height > 0;
};

function loadImage(src) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.src = src;
    // Remind: Check if cached
    if (isCached(image)) return resolve({ src: src, isCached: true });

    image.onload = function () {
      return resolve({ src: src, isCached: false });
    };
    image.onerror = function (err) {
      return reject(err);
    };
  });
}