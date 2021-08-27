// 引入express模块
const express=require('express');
// 创建路由器对象
const router=express.Router();
// 导入连接池对象
const pool=require('../pool');

router.get("/",(req,res)=>{
	var sql="select * from xh_index_product";
	pool.query(sql,[],(err,result)=>{
		res.send(result);
	})
})
// 导出路由器对象
module.exports= router;