const http = require('http');
const path = require('path');
const fs = require('fs');
const urllib = require('url');

//var data = {'name': 'jifeng', 'company': 'taobao'};

//JQUERY JSONP

http.createServer(function (request, response) {
   const url = request.url;
   const filePath = path.join(process.cwd(),url);

  var params = urllib.parse(url, true);

   const realfilePath = path.join(process.cwd(),params.pathname);
    fs.readFile(realfilePath,'utf8',(err,data) => {
           if (params.query && params.query.callback){
    var str =  params.query.callback + '(' + data + ')';//jsonp
    }
        response.end(str);
        });



   console.log(params)
   console.log(realfilePath)
 




/* 
//开启权限
   response.setHeader("Access-Control-Allow-Origin", "*");
   response.setHeader("Access-Control-Allow-Methods","GET,POST");
*/
/* 
//基本流读取文件 返回页面
 fs.stat(filePath, (err, stats) =>{ 
     if(err){
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('not a file');
        return;
     }

     if(stats.isFile()) {
        response.setHeader('Charset','utf-8');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        fs.createReadStream(filePath).pipe(response);
       // fs.readFile(filePath, (err,data) => {
       //   response.end(data);
       // });
     } else if (stats.isDirectory()) {
       fs.readdir(filePath,(err, files) => { 
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(files.join(','));
       });
     }
 });
*/
//基本服务器建立 
 /*response.writeHead(200, {'Content-Type': 'text/plain'});
 response.write('<html>')
 response.write('<body>')
 response.write('Hello World\n')
 response.write('</body>')
 response.write('</html>')
 response.end(filePath);*/
}).listen(3000);

console.log("Server running ~ at http://127.0.0.1:3000/");