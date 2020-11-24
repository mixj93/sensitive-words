"use strict";

var _ = require(".");

test('replaces blacklisted words with asterisk', function () {
  expect((0, _.sensitiveWords)('The name of the NX will be Nintedo Switch.', ['switch'])).toBe('The name of the NX will be Nintedo ***.');
});
test('replaces multiple instances of blacklisted words', function () {
  expect((0, _.sensitiveWords)('The name of the NX will be Nintedo Switch. The switch will be awesome!', ['switch'])).toBe('The name of the NX will be Nintedo ***. The *** will be awesome!');
});