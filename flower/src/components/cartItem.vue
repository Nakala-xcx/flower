<template>
  <div id="cart">
    <div class="cartitem">
      <!-- 标题栏 -->
      <div class="title">
        <h2>购物车</h2>
        <p>
          <span>1.结算商品————</span>
          <span>2.确认订单————</span>
          <span>3.支付完成</span>
        </p>
      </div>
      <!-- 分组 -->
      <div class="lable">
        <div class="l-a">
          <input type="checkbox" @click="selectAll">全选
        <span>商品</span>
        </div>
        <div class="l-b">
          <span>单价(￥)</span>
          <span>数量</span>
          <span>金额(￥)</span>
          <span>操作</span>
        </div>
      </div>
      <!-- 物品栏 -->
      <div class="shopping">
        <ul v-for="(item,index) of list" :key="index">
          <li>
            <div class="s-l">
              <input type="checkbox" v-model="item.cb">
              <img :src="'/'+ item.img" alt="" style="width:45px;display:inline-block">
              <span>{{item.lname}}</span>
            </div>
            <div class="s-r">
              <span>￥{{(item.price).toFixed(2)}}</span>
              <div style="display:inline-block" class="num">
                <button>-</button>
                <span>{{item.count}}</span>
                <button>+</button>
              </div>
              <span>￥{{(item.price*item.count).toFixed(2)}}</span>
              <span @click="delItem" :data-id="item.id">移除</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 结算栏 -->
      <div class="totle">
        <div class="l-a">
            <input type="checkbox" @click="selectAll">全选
            <span @click="delItems">删除选中的商品</span>
        </div>
        <div class="l-b">
          <router-link :to="'/products/ '">继续购物</router-link>
          <span>总计：</span>
          <span>￥{{totle.toFixed(2)}}</span>
          <button>结算({{totle.toFixed(2)}})</button>
        </div>       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[]
    }
  },
  computed:{
    totle(){
      var result=0;
      for(var p of this.list){
        result+=p.price*p.count
      }
       return result;
    }
  },
  methods:{
    

    // 全选
    selectAll(event){
      var cb=event.target.checked
      // console.log(cb)
      for(var item of this.list){
        item.cb=cb
      }
    },
    // 删除多个商品
    delItems(){
      var id="";
      // 遍历所有的id属性，进行拼接
      for(var item of this.list){
        if(item.cb){
          id+=item.id+",";
        }
      };
      // 去除最后一个逗号
      id=id.slice(0,-1)
      // console.log(id)
      // 判断id是否为空
      if(id==''){
        alert('请选择需要删除的商品');
        return;
      };
      // 执行axios
      this.axios.get('/cart/delates',{params:{id}}).then(res=>{
        if(res.data.code==1){
          alert('删除成功');
          this.loadMore();
        }else{
          alert('删除失败')
        }
      })
    },
    // 删除一个商品
    delItem(event){
      var id=event.target.dataset.id;
      this.axios.get('/cart/delate',{params:{id}}).then(res=>{
          if(res.data.code==1){
            alert('删除成功');
            // this.loadMore();
            location.reload();
          }else{
            alert('删除失败')
          }
      })
    },
    // 查询指定用户购物车信息
    loadMore(){
      // 获取uid的值
      var uid = localStorage.getItem('uid') || sessionStorage.getItem("uid") || ''
        if(uid!==''){
          this.axios.get('/cart/carts',{
            params:{uid}
          }).then(res=>{
            // this.list=res.data.data;
            console.log(res.data)
            // 添加一个新属性
            var rows=res.data.data;
            for(var item of rows){
              item.cb=false
            }
            this.list=rows
          })
        }else {
          alert('请登录');
          this.$router.push('/login')
        }
    }
  },
  created(){
    this.loadMore();
  }
}
</script>
<style scoped>
.cartitem .shopping>ul>li{
  margin: 0 20px 0 5px;
  height: 100px;
  overflow: auto;
}
.cartitem .shopping{
  height: 600px;
  overflow: auto;
}
.cartitem .shopping>ul{
  list-style: none;
 
}
.cartitem .shopping>ul>li>.s-l{
  float: left;
  width: 45%;
}
.cartitem .shopping>ul>li>.s-l>span{
  margin-left: 15px;
}
.cartitem .shopping>ul>li>.s-l>input{
  width: 30px;
  margin-top: 40px
  
}
.cartitem .shopping>ul>li>.s-r{
  float: right;
  width: 55%;
  margin-top: 35px;
}
.cartitem .shopping>ul>li>.s-r>span:nth-child(1){
  width: 160px;
  display: inline-block;
  text-align: center;
}
.cartitem .shopping>ul>li>.s-r>span:nth-child(3){
  width: 70px;
  display: inline-block;
  text-align: center;
}
.cartitem .shopping>ul>li>.s-r>span:nth-child(4){
  cursor: pointer;
  width: 130px;
  display: inline-block;
  text-align: center;
}
.cartitem .shopping>ul>li>.s-r>.num{
  width: 120px;
  margin: 0 auto;
}
.cartitem .shopping>ul>li>.s-r>.num>span{
  width: 38px;
  display: inline-block;
  border: 1px solid #e8e8e8;
  margin: 0 2px;
  text-align: center;
}
.cartitem .shopping>ul>li>.s-r>.num>button{
  border: 1px solid #e8e8e8;
}
#cart{
  height: 900px;
  width: 100%;
  background-image: url(/img/index/dy_dah2.jpg);
  background-repeat: repeat;
  background-size: 100%;
}
.cartitem{
  background-color: #fff;
  opacity: 0.8;
  width: 990px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -495px;
  margin-top: -300px;
}
.cartitem .title{
  width: 950px;
  height: 75px;
  margin: 0 20px;
  border-bottom: 2px solid #e1e1e1
}
.cartitem .title>h2{
  float: left;
    font-size: 22px;
    font-weight: normal;
    color: #eb6100;
    text-align: center;
    line-height: 25px;
    padding: 25px 22px;
    border-bottom: 2px solid #eb6100;
    position: relative;
    z-index: 5;
}
.cartitem .title>p{
  float: right;
    line-height: 25px;
    padding: 25px 22px 25px 0;
    font-size: 12px;
    color: #b5b5b5;
}
.cartitem .lable{
  background-color: #f7f7f7;
  height: 55px;
  width: 950px;
  margin: 0 20px;
  line-height: 10px;
  padding: 25px 22px;
  font-size: 14px;
}
.cartitem .lable>.l-a{
  float: left;
  width: 50%;
}
.cartitem .lable>.l-a>input{
  width: 30px;
}
.cartitem .lable>.l-a>span{
  width: 120px;
  display: inline-block;
  text-align: center;
}
.cartitem .lable>.l-b{
  float: right;
  width: 50%;
}
.cartitem .lable>.l-b>span{
  width: 110px;
  display: inline-block;
  text-align: center;
}
.cartitem .totle{
  background-color: #f7f7f7;
  height: 95px;
  width: 950px;
  margin: 0 20px;
  font-size: 14px;
  padding: 20px 20px;
  border-top: 2px solid #e1e1e1
}
.cartitem .totle>.l-a{
  float: left;
  width: 50%;
  height: 70px;
  line-height: 70px;
}
.cartitem .totle>.l-a>input{
  width: 30px;
  
}
.cartitem .totle>.l-a>span{
  width: 120px;
  display: inline-block;
  text-align: center;
  margin-left: 40px;
  cursor: pointer;
}
.cartitem .totle>.l-b{
  float: right;
  width: 50%;
  height: 70px;
  line-height: 70px;
}
.cartitem .totle>.l-b>span{
  width: 120px;
  display: inline-block;
  text-align: center;
  
}
.cartitem .totle>.l-b>span:first-child{
  margin-left: 50px;
  cursor: pointer;
}
.cartitem .totle>.l-b>span:nth-child(2){
  margin-right: 70px;
  margin-left: -30px;
}
.cartitem .totle>.l-b>span:nth-child(3){
  margin-right: 15px;
  margin-left: -136px;
}
.cartitem .totle>.l-b>button{
  margin-left: 15px;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 120px;
    background: #eb6100;
    font-size: 17px;
    border: none;
    color: #FFF;
    cursor: pointer;
}

</style>