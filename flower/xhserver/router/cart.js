const express=require("express");
const router=express.Router();
const pool=require('../pool.js');
const query=require('./query.js');

// 添加到购物车
router.get('/add',(req,res)=>{
  // 获取相应参数
  var uid=req.query.uid;
  var lid=req.query.lid;
  var count=req.query.count;
  var lname=req.query.lname;
  var price=req.query.price;
  var img=req.query.img;
  // 查询当前用户是否购买此类商品
  var sql="select id from xh_cart where uid=? and lid=?";
  // 执行SQL语句
  pool.query(sql,[uid,lid],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      // 添加商品
      var sql=`insert into xh_cart values(null,${uid},${lid},${count},'${lname}',${price},'${img}')`
    }else {
      // 更新商品
      var sql=`update xh_cart set count=count+? where uid=${uid} and lid=${lid}`
    }
    pool.query(sql,[count],(err,result)=>{
      if(err) throw err;
      if(result.affectedRows>0){
        res.send({code:1,msg:"添加成功"})
      }else{
        res.send({code:-2,msg:'添加失败'})
      }
    })
  })
})


// 查询指定用户购物车信息
router.get('/carts',(req,res)=>{
  // 当前用户uid
  var uid=req.query.uid;
  // 创建SQL语句
  var sql="select * from xh_cart where uid=?";
  // 执行SQL语句
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
})

// 删除一个数据
router.get('/delate',(req,res)=>{
  var id=req.query.id;
  var sql = "delete from xh_cart where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:'删除成功'})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})

// 删除多个商品
router.get('/delates',(req,res)=>{
  var id=req.query.id;
  var sql =`delete from xh_cart where id IN (${id})`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:'删除成功'})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})

// 获取当前用户购买商品的总量
router.get('/cartSums',(req,res)=>{
  var uid=req.query.uid;
  var sql="select count from xh_cart where uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
      if(result.length>0){
        res.send({code:1,msg:'查询成功',data:result})
      }else{
        res.send({code:-1,msg:'查询失败'})
      }
  })
})
module.exports=router;