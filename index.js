/* gulp-add-src / v0.1.1 / (c) 2014 Uri Shaked / MIT Licence */

'use strict';
var through = require('through2');
var es = require('event-stream');
var vynil = require('vinyl-fs');

module.exports = function addSrc() {
    var pass = through.obj();
    return es.duplex(pass, es.merge(vynil.src.apply(vynil.src, arguments), pass));
};
