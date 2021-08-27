<template>
  <div class="myheader">
    <div class="container">
      <div class="logo row clearfix p-4">
        <div class="col-6 text-right pr-3">
          <img src="/img/index/logo_03_28mi.png" alt="">
        </div>
        <div class="title text-left col-6 p-0">
          <div>鲜花花束，美好值得期待</div>
          <div>GOOD WORTH FORWARD</div>
        </div>
      </div>
    </div>
    <div id="header-nav">
      <div class="mynav">
          <div class="nav-left">
            <router-link :to="`/`" class="lable">首页</router-link>
            <router-link :to="'/products/ '" class="lable">所有产品</router-link>
            <div class="lable">新品专区
                <img src="/img/index/icon_sj_06_by1r.png" alt="">
            </div>
          </div>
          <div class="nav-right">
              <div>订阅鲜花</div>
              <div>浪漫表白</div>
              <div>限时团购</div>
              <div>加入收藏</div>
              <div class="last">
                  <img src="/img/index/shop_car1.png" alt="">
                  <span class="last-text" style="cursor: pointer;" @click="open">购物车</span>
                  <span class="last-num" >{{counts}}</span>
                  <span class="last-text">物品</span>
              </div>
              <div class="islogin" v-if="uname!='' ">欢迎:{{uname}} | 
                  
                  <span @click="logout" style="cursor: pointer;">注销</span>
              </div>
              <div class="home" v-else>
                  <router-link :to="`/register`">注册</router-link>
                  &nbsp;|
                  <router-link :to="`/login`">登录</router-link>
              </div>`
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"

export default {
  data(){
    return {
      hid:true,
      counts:0
    }
  },
  created(){
    this.setCounts()
  },
  // updated(){
  //    this.setCounts()
  // },
  methods:{
    // 购物车数量
    setCounts(){
      var uid = localStorage.getItem('uid') || sessionStorage.getItem("uid") || '';
      if(uid!==''){
          // 执行axios
          this.axios.get('/cart/cartSums',{
            params:{ uid }
          }).then(result=>{
              var rows=result.data.data;
              var sum=0
              for(var i of rows){
                sum+=i.count
              }
              this.counts=sum;
          })
        }
        
    },
    // 打开购物车
    open(){  
      this.$router.push('/cartitem')
    },
    // 注销
    logout(){
      this.setUname("");
      localStorage.clear();
      sessionStorage.clear();
      window.location.href=document.referrer;
    },
    // 引入vuex
    ...mapMutations(["setUname"]),   
  },
  mounted(){
    var uname=localStorage.getItem("uname")||sessionStorage.getItem("uname");
    this.setUname(uname||'');
  },
  computed:{
    ...mapState(["uname"])

  }
}
</script>
<style scoped> 
  .myheader{
    background-color: rgb(248,246,234);
    font-size: 14px; 
  }
  .myheader .logo{
    color: rgb(252, 82, 86);
  }
  #header-nav{
    border-bottom: 1px solid #5a5a5a;
    border-top: 1px solid #5a5a5a;
    color: #bfa594;
  }
  #header-nav .mynav{
    margin: 0 auto;
    width: 1200px;
    height: 40px;
  } 
  #header-nav .mynav>.nav-left{
    float: left;
  }
  #header-nav .mynav>.nav-right{
    float: right;
  }
  #header-nav .mynav>.nav-left>.lable{
    float: left;
    width: 100px;
    text-align: center;
    height: 20px;
    margin-right: 10px;
    margin-top: 10px;
    color: #bfa594;
  }
  #header-nav .mynav>.nav-right>div{
    float: left;
    width: 135px;
    text-align: center;
    height: 20px;
    margin-top: 10px;
  }
  #header-nav .mynav>.nav-right>.last{
    float: left;
    height: 20px;
    margin-right: 10px;
    font-size: 12px;
  }
  #header-nav .mynav>.nav-right>.last>.last-text{
    font-weight: normal;
    color: #6d6d6d;
  }
  #header-nav .mynav>.nav-right>.last>.last-num{
    font-weight: bold;
    color: #fe8300;
  }
  #header-nav .mynav>.nav-right>.islogin{
    font-size: 12px;
  }
</style>
