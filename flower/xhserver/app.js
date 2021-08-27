//引入express模块
const express=require('express');
const session = require("express-session");



//创建web服务器
const app=express();
//设置端口
app.listen(5050);
//引入body-parser
const bodyParser = require('body-parser');
// 使用body-parser将post数据解析为对象
app.use(bodyParser.urlencoded({
	extended:false
}));
//引入跨域管理模块
const cors = require("cors");
//配置允许跨域程序
app.use(cors({
	 origin:["http://127.0.0.1:5050","http://localhost:8080"],
     credentials:true
}))
app.use(session({
    name: 'session-id',
    secret: '12345-67890',   //安全字符串
    saveUninitialized: true,   //保存初始化数据
    resave: true    //每次请求保存数据
}))

//引入用户路由器模块
const users=require('./router/users');
const details=require('./router/details');
const index=require('./router/index');
const products=require('./router/products');
const carousel=require('./router/carousel')
const cart=require('./router/cart');
const sort=require('./router/sort');

//挂载路由器
app.use('/users',users);
app.use('/details',details);
app.use('/products',products);
app.use('/index',index);
app.use('/carousel',carousel)
app.use('/cart',cart);
app.use('/sort',sort);
// 静态托管
app.use(express.static('../public'));

// 拦截所产生的错误
app.use((req,res,next)=>{
	next(createError(404))
});
 app.use((err,req,res,next)=>{
    res.locals.message=err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
 })