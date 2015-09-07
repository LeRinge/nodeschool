var fil = require('./FilteredLS.js');

fil(process.argv[2],process.argv[3],function(err,list){
	if(err){
		console.log(err);
	}
	else{
		list.forEach(function(item){
			console.log(item);
		});
	}

});
