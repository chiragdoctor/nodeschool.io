var fs = require('fs');

fs.readFile(process.argv[2],function(err, data){
   if(err) {
       return err;
   }
   var lines = data.toString().split('\n').length - 1;
    console.log(lines);

});