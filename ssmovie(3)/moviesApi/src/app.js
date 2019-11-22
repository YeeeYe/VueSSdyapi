const express = require('express')
const bodyParser = require('body-parser')
 
const app = express()
app.use('/headimg/', express.static('./headimg/'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// app.use('/upload/', express.static('./upload/'))

//app.use(express.static('public'));

//1.0 初始化orm
const orm = require('orm');
app.use(orm.express('mysql://root:root@127.0.0.1:3306/movie',{
	define:function(db,models,next){
  
		next();
	}
}));

//2.0 将所有api的请求响应content-type设置为application/json

// app.all('/api/*',(req,res,next)=>{
// 	//设置允许跨域响应报文头
// 		//设置跨域
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods","*");

// 	  res.setHeader('Content-Type','application/json;charset=utf-8');
// 	next();
// });

// //设置允许跨域访问该服务.
// app.all('*', function (req, res, next) {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	//Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
// 	res.header('Access-Control-Allow-Headers', 'Content-Type');
// 	res.header('Access-Control-Allow-Methods', '*');
// 	res.header('Content-Type', 'application/json;charset=utf-8');
// 	next();
//   })
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



//2.0 设置路由规则
const apiRoute = require('./routes/apiRoute.js');
app.use('/',apiRoute);

//可以通过localhost和ip地址来访问
app.listen(8899,'0.0.0.0',()=>{

	console.log('api服务已启动, :8899');
});