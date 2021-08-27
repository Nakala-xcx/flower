// 引入express模块
const express = require('express');
// 创建路由器对象
const router = express.Router();
var query = require("./query");
router.get("/",(req,res)=>{
	var lid=req.query.lid;
	var output={};
	var sql="select * from xh_flower where lid=?";
	query(sql,[lid]).then(result=>{
		output.product=result[0];
		var fid=output.product.family_id;
		var sql="select fname,lid from xh_flower where family_id=?";
		return query(sql,[fid])
	})
	.then(result=>{
		output.name=result;
		var sql="select * from xh_flower_pic where flower_id=?";
		return query(sql,[lid])
	})
	.then(result=>{
		output.pics=result;
		res.send(output);
	})
	.catch(error=>console.log(error))
});


module.exports = router; 