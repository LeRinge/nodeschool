var fs = require('fs');
var path = require('path');

module.exports=function(dir,ext,callback){
    var arr =[];
	fs.readdir(dir,function(err,files){
        	
            if(err)
                return callback(err);
                	
                
                var arr =[];
		       for(i=0;i<files.length;i++){
                             if(path.extname(files[i]).substring(1) == ext){
                                    arr.push(files[i]);
                        }
                    }
                 return callback(null,arr);
            
        });
   
};

    
