require('../index.js');
require('@dmail/url-search-params');
var assert = require('assert');

var url = new URL('file:///C:/Users');

assert.equal(url.protocol, 'file:');
assert.equal(url.pathname, '/C:/Users');
assert.equal(url.href, 'file:///C:/Users');