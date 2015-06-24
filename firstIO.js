var fs=require('fs');
var buffer;
var str;

buffer= fs.readFileSync(process.argv[2]);
str=buffer.toString();
console.log(str.split('\n').length-1);
