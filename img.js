/**
 * Created by dllo on 17/4/20.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var server=http.createServer(function (request,response) {
    var obj=request.url;
    fs.readFile('.'+obj,'binary',function (error,data) {
        if(error){
            response.writeHead(404);
        }else {
            response.writeHead(200,{'Content-Type':'image/png'});
            response.write(data,'binary');
        }
        response.end();
    });
});
server.listen(3000);