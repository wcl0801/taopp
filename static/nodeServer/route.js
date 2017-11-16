var path = require("path");



var appData = require('./data/data.json'); //引入json文件
var appBegin = require('./data/begin.json'); //引入json文件
var appCinema = require('./data/cinema.json'); //引入json文件
var appCinemaDetail = require('./data/cinemaDetail.json'); //引入json文件
var appBankCard = require('./data/bankCard.json'); //引入json文件
var appBuyMovieMsg = require('./data/buyMovieMsg.json'); //引入json文件
var appBuySeats = require('./data/buySeats.json'); //引入json文件
var data = appData.data; //接口一
var begin = appBegin.data; //接口二
var cinema = appCinema.data; //接口三
var buy = appCinemaDetail.data; //接口四
var bankCard = appBankCard.data; //接口五
var buyMovieMsg = appBuyMovieMsg.data; //接口六
var buySeats = appBuySeats.data; //接口七

function route(app) {

  app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
  });


  //配置路由
  app.get("/data", function (req, res) {

     //res.send("跟路徑");
    res.json({
      data: data
    });
  });
  app.get("/begin", function (req, res) {

   // res.send("home");
    res.json({
      begin: begin
    });

  });
  app.get("/cinema", function (req, res) {

    // res.send("home");
    res.json({
      cinema: cinema
    });

  });
  app.get("/buy", function (req, res) {

    // res.send("home");
    res.json({
      buy: buy
    });

  });
  app.get("/buyMovieMsg", function (req, res) {
    res.json({
      buyMovieMsg: buyMovieMsg
    });

  });
  app.get("/buySeats", function (req, res) {
    res.json({
      buySeats: buySeats
    });


  });
  app.get("/bankCard", function (req, res) {
    res.json({
      bankCard: bankCard
    });

  });
  app.get("/log", function (req, res) {

    res.send(req.query);
    //res.sendFile(__dirname+"/public/static/img/logo.png");

  });

  //:id? :可变的路由，？表示可以不传
  app.get("/userInfo/:id?", function (req, res) {
    // req.params：获取路由的parameters
    console.log(req.params.id);
    res.send(req.params);
    //res.sendFile(__dirname+"/public/static/img/logo.png");

  });

  app.post("/postLog", function (req, res) {
    //默认是undfined，引入bodyParser后使用
    res.send(JSON.stringify(req.body));
  });


  //匹配所有
  app.get("*", function (req, res) {
    res.send("404");

    // var filePath = path.resolve(__dirname,"../public/static/html/8-404.html");

    // res.sendFile(filePath);
  });

}


module.exports = route;
