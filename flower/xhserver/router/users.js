//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
const router=express.Router();
// 用户登录
router.post('/login',(req,res)=>{
	let {uname,upwd}=req.body;
	var sql="select * from xh_user where uname=? and upwd=?";
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({ok:1,uname:result[0].uname, uid:result[0].uid});
      
		}else{
			res.send('{ok:0,msg:"用户名或密码错误!"}');
		}
	});
});
// 是否登录
// router.get("/islogin",(req,res)=>{
//   var uid=req.session.uid
//   if(uid==null){
//     res.write(JSON.stringify({ok:0}));
//     res.end();
//   }else{
//     var sql="select * from xz_user where uid=?";
//     pool.query(sql,[uid],(err,result)=>{
//       res.write(JSON.stringify({ok:1,uname:result[0].uname}));
//       res.end();
//     })
//   }
// })
// 退出
// router.get("/signout",(req,res)=>{
//   delete req.session.uid;
//   res.send();
// })
// 用户注册
router.post("/signup",(req,res)=>{
  var {uname, upwd}=req.body;
  var sql1="select * from xh_user where uname=?";
  pool.query(sql1,[uname],(err,result)=>{
    if(err){
      console.log(err);
      res.write(JSON.stringify({
        ok:0, msg:"注册失败"
      }))
      res.end();
    }else if(result.length>0){
      res.write(JSON.stringify({
        ok:0, msg:"用户名已存在"
      }))
      res.end();
    }else{
      var sql2="INSERT INTO `xh_user`(`uname`, `upwd`) VALUES (?,?)";
      pool.query(sql2,[uname,upwd],(err,result)=>{
        if(err){
          console.log(err);
          res.write(JSON.stringify({
            ok:0, msg:"注册失败"
          }))
        }else{
          res.write(JSON.stringify({
            ok:1, uid:result.insertId
          }))
        }
        res.end()
      })
    }
  })
})

// 密码修改
router.post("/changepwd",(req,res)=>{
  var {uid, oldupwd, upwd}=req.body;
  var sql1="select * from xh_user where uid=? and upwd=? ";
  pool.query(sql1,[uid,oldupwd],(err,result)=>{
    if(err){
      console.log(err);
      res.write(JSON.stringify({
        ok:0, msg:"密码修改失败！"
      }))
      res.end();
    }else if(result.length==0){
      res.write(JSON.stringify({
        ok:0, msg:"原密码不正确！"
      }))
      res.end();
    }else{
      var sql2="UPDATE `xh_user` SET `upwd`=? WHERE `uid`=?";
      pool.query(sql2,[upwd,uid],(err,result)=>{
        err&&console.log(err);
        if(err){
          console.log(err);
          res.write(JSON.stringify({
            ok:0, msg:"修改密码失败"
          }))
        }else{
          res.write(JSON.stringify({
            ok:1, msg:"密码修改成功"
          }))
        }
        res.end();
      })
    }
  })
})
//导出路由器对象
module.exports = router;
