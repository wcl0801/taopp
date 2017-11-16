var express = require("express");

var bodyParser = require("body-parser");


function start(route) {

    var app = express();

    //静态文件
    // app.use(express.static(__dirname+"/static"));

    //注意：使用静态文件的时候，要去掉public路径
    //http://127.0.0.1:8888/static/js/lib/jquery-3.1.1.js
    app.use(express.static("../public"));

    // create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({extended: false});
    app.use(urlencodedParser);

    //路由配置
    route(app);

    var server = app.listen(8888, "127.0.0.1", function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log("应用实例，访问地址为 http://%s:%s", host, port)
    });


}


module.exports.start = start;
