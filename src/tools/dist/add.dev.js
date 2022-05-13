"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plus_one = plus_one;
exports.myPromise = myPromise;

function plus_one(num1, num2) {
  // console.log(num1, num2);
  var res = num1 + 1;
  console.log(res, '+ 1 =');
}

function myPromise() {
  var res;
  return regeneratorRuntime.async(function myPromise$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(plus_two(1));

        case 2:
          res = _context.sent;
          console.log(res, 'plus_two = ');

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function plus_two(num) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      return res(num);
    }, 500);
  });
}