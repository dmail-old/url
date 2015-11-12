require('../index.js');
require('@dmail/url-search-params');
var assert = require('assert');

var resolvingProtocolUrl = new URL('//google.com', 'https://mydomain.fr');

assert.equal(resolvingProtocolUrl.protocol, 'https:');
assert.equal(resolvingProtocolUrl.href, 'https://google.com');

var fileUrl = new URL('file:///C:/Users');

assert.equal(fileUrl.protocol, 'file:');
assert.equal(fileUrl.host, '');
assert.equal(fileUrl.pathname, '/C:/Users');
assert.equal(fileUrl.href, 'file:///C:/Users');

var resolvingFileProtocolURL = new URL('//C:/file.txt', 'file:///folder');

assert.equal(resolvingFileProtocolURL.protocol, 'file:');
assert.equal(resolvingFileProtocolURL.href, 'file:///C:/file.txt');