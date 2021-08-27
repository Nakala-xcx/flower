const express=require('express');
const router=express.Router();
const pool=require('../pool');
var query = require("./query");
// 降序排列
router.get('/desc',(req,res)=>{
  var output={
    count:0,  //数量
		pageSize:15,   //每页数量
		pageCount:0,   //页数
		data:[],    //详情
		pno:req.query.pno||0
  };
  var sql="select *,(select md from xh_flower_pic where flower_id=lid limit 1) as md from xh_flower order by price desc ";
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
});

// 升序排列
router.get('/asc',(req,res)=>{
  var output={
    count:0,  //数量
		pageSize:15,   //每页数量
		pageCount:0,   //页数
		data:[],    //详情
		pno:req.query.pno||0
  };
  var sql="select *,(select md from xh_flower_pic where flower_id=lid limit 1) as md from xh_flower order by price asc ";
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
});

// 价格搜索
router.get('/searchs',(req,res)=>{
  var output={
    count:0,  //数量
		pageSize:15,   //每页数量
		pageCount:0,   //页数
		data:[],    //详情
		pno:req.query.pno||0
  };
  var sp=req.query.sp||0;
  var bp=req.query.bp||999;
  var sql=`select *,(select md from xh_flower_pic where flower_id=lid limit 1) as md from xh_flower where price between ${sp} and ${bp} `;
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
});
module.exports=router;