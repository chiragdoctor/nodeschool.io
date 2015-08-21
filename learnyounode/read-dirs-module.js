var fs = require('fs');
var p = require('path');

module.exports = function (path, filter, callback) {
    fs.readdir(path, function (err, dirs) {
        if (err) {
            return callback(err, null);
        }
       dirs = dirs.filter(function (dir) {
            return p.extname(dir) == '.' + filter;
        });
        callback(null, dirs);
    });
};