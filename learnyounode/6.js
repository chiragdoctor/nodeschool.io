var dirs = require('./read-dirs-module');

dirs(process.argv[2], process.argv[3], function (err, dirs) {
    if(err){
        return err;
    }
    dirs.forEach(function(dir) {
        console.log(dir);
    })
})