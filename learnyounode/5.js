var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, dirs){
    dirs.forEach(function(dir){
        var extname = path.extname(dir);
        if (extname == '.' + process.argv[3]) {
            console.log(dir);
        }
    })
});