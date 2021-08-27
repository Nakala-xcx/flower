// 引入express模块
const express = require("express");
// 创建路由对象
const router = express.Router();
// 引入query文件
var query = require("./query");

router.get("/",(req,res)=>{
	var output={
		count:0,  //数量
		pageSize:15,   //每页数量
		pageCount:0,   //页数
		data:[],    //详情
		pno:req.query.pno||0
	};
	var kw=req.query.kw||""; 
  // 玫瑰 百合
  var kws=kw.split(" ");
  // [玫瑰,百合]
  kws.forEach((elem,i,arr)=>{
    arr[i]=`fname like '%${elem}%'`;
  });
  var where=kws.join(" and ");
	var sql=`select *,(select md from xh_flower_pic where flower_id=lid limit 1) as md from xh_flower where ${where}`;
	query(sql,[]).then(result=>{
    output.count=result.length;
    output.pageCount=Math.ceil(output.count/output.pageSize);
    sql+=`limit ?,?`;
    return query(sql,[output.pageSize*output.pno,output.pageSize]);
  })
  .then(result=>{
    output.data=result;
    res.send(output);
  })
})


// 导出路由器对象
module.exports= router;