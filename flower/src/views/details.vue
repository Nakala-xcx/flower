<template>
    <div id="details">
      <!-- 左侧图片栏 -->
        <div class="left-img">
            <div>
                <span class="s1">19支玫瑰花</span>
                <!-- <br> -->
                <span class="s2">爱到永恒</span>
                <img src="/img/index/flover_sz_03_mocp.png" alt="">
            </div>
            <div>
                <span class="s3">19支香槟玫瑰</span>
                <!-- <br> -->
                <span class="s2">拥爱满怀</span>
                <img src="/img/index/flover_sz_05_512s.png" alt="">
            </div>
            <div>
                <span class="s1">19支黄玫瑰</span>
                <!-- <br> -->
                <span class="s2">手捧幸福</span>
                <img src="/img/index/flover_sz_07_lgq2.png" alt="">
            </div>
            <div>
                <span class="s1">19支白玫瑰</span>
                <!-- <br> -->
                <span class="s2">真诚浪漫</span>
                <img src="/img/index/flover_sz_09_kjav.jpg" alt="">
            </div>
        </div>
        <!-- 右侧详情栏 -->
        <div class="details-right">
          <!-- 右侧头部 -->
            <div class="details-top">
                <!-- 放大镜 -->
                <div class="zoom">
                  <div class="fdj">
                    <!-- 左侧小图 -->
                    <div class="leftbox">
                      <img :src="pics[0].md" alt="">
                      <!-- 遮罩层 -->
                      <div class="mask" :class="{'d-none':hide}" :style="maskStyle"></div>
                      <!-- 大遮罩层 -->
                      <div class="super-mask" @mouseover="toggle" @mouseout="toggle" @mousemove="move"></div>
                    </div>
                    <!-- 右侧大图 -->
                    <div class="rightbox" :class="{'d-none':hide}" >
                      <img :src="pics[0].lg" alt="" :style="{left:`-${parseInt(maskStyle.left)*2}px`,top:`-${parseInt(maskStyle.top)*2}px`}">
                    </div>
                  </div>
                </div>
                <!-- 物品详情 -->
                <div class="title">
                    <div class="box">
                        <h2>{{product.title}}</h2>
                        <div class="sprice">
                            <div class="price">
                                <div class="price-left">
                                    <span>价格：</span>    
                                    <b>￥{{product.price}}</b> 
                                </div>
                                <div class="price-right">市场价：￥{{product.market}}</div>
                            </div>
                            <div class="record">
                                <div>满意度：
                                    <img src="/img/product/details/satisfaction.jpg" alt="">
                                    <img src="/img/product/details/satisfaction.jpg" alt="">
                                    <img src="/img/product/details/satisfaction.jpg" alt="">
                                    <img src="/img/product/details/satisfaction.jpg" alt="">
                                    <img src="/img/product/details/satisfaction.jpg" alt="">
                                </div>
                                <div style="padding-right: 45px;">成交：0次</div>
                                <div style="padding-right: 45px;">评论：0次</div>
                            </div>  
                        </div>
                        <!-- 数量加减 -->
                        <div class="xh-s-item clearfix">
                            <h6 class="float-left">数量：</h6>
                            <div class="float-left xz-number d-flex">
                            <button class="btn" @click="minus">-</button>
                            <span>{{n}}</span>
                            <button class="btn" @click="add">+</button>
                            </div>
                        </div>
                        <div class="xh-btns">
                            <button class="btn-left" @click="addcart" :data-lid="product.lid"
                            :data-price="product.price" :data-title="product.title" :data-img="pics[0].md"
                            :data-count="n">加入购物车</button>
                            <button class="btn-right" @click="open">立即购买</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 详情 -->
            <div class="xh-cut mt-3">
                <div class="xh-tab">
                    <!-- 用于切换的tab区 -->
                    <div class="nav nav-tabs" style="border-bottom: none;">
                    <a href="#show1" class="nav-link" data-toggle="tab" :style="{'border-top':p==0 ?'3px solid #048bcd' :0}" @click="exchange(0)">商品信息</a>
                    <a href="#show2" class="nav-link" data-toggle="tab" :style="{'border-top':p==1 ? '3px solid #048bcd' :0}" @click="exchange(1)">购买记录</a>
                    <a href="#show3" class="nav-link" data-toggle="tab" :style="{'border-top':p==2 ? '3px solid #048bcd' :0}" @click="exchange(2)">顾客评论</a>
                    <a href="#show4" class="nav-link" data-toggle="tab" :style="{'border-top':p==3 ? '3px solid #048bcd' :0}" @click="exchange(3)">买家问答</a>
                    </div>
                    <!-- 用于展现的区域 -->
                    <div class="tab-content p-2">
                    <div id="show1" class="tab-pane show active text" v-if="p==0" v-html="`${product.detailed}`"></div>
                    <div id="show2" class="tab-pane show shopping" v-if="p==1">
                        <!-- 写媒体对象 -->
                        <div class="purchass clearfix">
                        <span>购买人</span>
                        <span>会员级别</span>
                        <span>数量</span>
                        <span>属性</span>
                        <span>购买时间</span>
                        </div>
                        <div class="text02 clearfix">
                        <span>总计 0 条记录</span>
                        </div>
                    </div>
                    <div id="show3" class="tab-pane show comment-area" v-if="p==2">
                        <!-- 写媒体对象 -->
                        <div>
                        <span>商品满意度:</span>
                        <img src="/img/product/details/sitestar_productdetails_star_image.png" alt="">
                        <img src="/img/product/details/sitestar_productdetails_star_image.png" alt="">
                        <img src="/img/product/details/sitestar_productdetails_star_image.png" alt="">
                        <img src="/img/product/details/sitestar_productdetails_star_image.png" alt="">
                        <img src="/img/product/details/sitestar_productdetails_star_image.png" alt="">
                        </div>
                        <div class="area">暂无评价信息</div>
                    </div>
                    <div id="show4" class="tab-pane show questions-answers" v-if="p==3">
                        <!-- 写媒体对象 -->
                        <div class="clearfix">
                        <a href="javascript:;">留言</a>
                        <a href="javascript:;">投诉</a>
                        <a href="javascript:;">询问</a>
                        <a href="javascript:;">售后</a>
                        </div>
                        <div>
                        <input type="text" name="" id="">
                        <button>提交</button>
                        </div> 
                    </div>
                    </div>
                </div>
            </div>
            <!-- 底部导航 -->
            <div class="link mt-3">
              <div class="d-left">
                  <span class="urll"></span>
                  <span class="d-text">上一个:</span>
                  <router-link :to="`/details/${product.prevhref}`">{{product.prevtitle}}</router-link>
              </div>
              <div class="d-right">
                  <span class="r-urll"></span>
                  <span class="d-text">下一个:</span>
                  <router-link :to="`/details/${product.nexthref}`">{{product.nexttitle}}</router-link>
              </div>
            </div>
            <!-- <cartitem :hidden="hid" :close="close"></cartitem> -->
        </div> 
    </div>
</template>
<script>
import cartitem from '../components/cartItem'
import cart from '../components/Cart'

export default {
    props:['lid'],
    components:{cartitem,cart},
    watch:{
      // 监听lid的值是否变化，渲染页面
        lid(){
            this.axios.get('/details',{
            params:{lid:this.lid}
            }).then(result=>{
                this.product=result.data.product; 
                this.pics=result.data.pics;   
            })
            this.n=1
        },
         
    }, 
    data(){
        return {
            product:{price:0,market:0},
            pics:[{md:'',lg:''}],
            hide:true,
            maskStyle:{
              left:"0",
              right:"0"
            },
            n:1,
            p:0,
            hid:true
        }
    },
    methods:{
      // 添加购物车功能
      addcart(event){
        var uid = localStorage.getItem('uid') || sessionStorage.getItem("uid") || '';
        // 判断用户是否登录
        if(uid!==''){
          // 获取相应数据
          var lid=event.target.dataset.lid;
          var count=event.target.dataset.count;
          var lname=event.target.dataset.title;
          var price=event.target.dataset.price;
          var img=event.target.dataset.img;
          // 执行axios
          this.axios.get('/cart/add',{
            params:{
             count,lname,price,img,uid,lid
            }
          }).then(result=>{
              if(result.data.code==-2){
                 alert('添加失败')
              }else{
                 alert('添加成功')
              }
          })
        }else{
          alert("请登录");
          this.$router.push('/login')
        }
      },
      // 打开购物车
      open(){
        this.hid=false
      },
      // 关闭购物车
      close(){
        this.hid=true
      },
      // 问答栏
      exchange(p){
        this.p=p
      },
      // 减少数量
      minus(){
        if(this.n>1){
          this.n--;
        }
      },
      // 增加数量
      add(){
        this.n++
      },
      // 放大镜
      move(e){
        var left=e.offsetX-75;
        var top=e.offsetY-100;
        if(left<0) left=0;else if(left>75) left=75;
        if(top<0) top=0;else if(top>100) top=100;
        this.maskStyle={
          left:left+"px",
          top:top+"px"
        }
      },
      toggle(){
        this.hide=!this.hide;
      }
    },
    // 执行axios
    created(){
        this.axios.get('/details',{
            params:{lid:this.lid}
        }).then(result=>{
            this.product=result.data.product;
            this.pics=result.data.pics;
        })
    }
}
</script>
<style lang="scss">
    #details{
  width: 1200px;
  margin: 0 auto;
  height: 950px;
  margin-top: 20px;
  .left-img{
    float: left;
    margin-right: 10px;
    width: 290px;
    div{
      position: relative;
      margin-bottom: 20px;
      &:last-child{
        margin-bottom: 90px;
      }
      &>.s2{
        position: absolute;
        top: 120px;
        left: 60px;
        font-size: 16px;
        color: rgb(197, 193, 193);
      }
      &>.s1{
        position: absolute;
        top: 90px;
        left: 30px;
        color: rgb(68, 50, 50);
        font-size: 18px;
      }
      &>.s3{
        position: absolute;
        top: 90px;
        left: 15px;
        color: rgb(68, 50, 50);
        font-size: 18px;
      }
    }
  }
  .details-right{
    float: right;
    width: 890px;
    height: 850px;
    position: relative;
    border-top: 1px solid #eeeeee;
    .details-top{
      width: 890px;
      height: 300px;
      &>.zoom{
       position: relative;
        &>.fdj{   
          &>.leftbox{
            width: 300px;
            height: 300px;
            position: relative;
            overflow: hidden;
            float: left;
            margin-left: 37.5px; 
            margin-right: -37.5px;
            img{
              width: 225px;
            }
            &>.mask{
             width: 150px;
             height: 200px;
             background-color: #fff;
             opacity: 0.5;
             position: absolute;
             top: 0;
             left: 0; 
            }
            &>.super-mask{
              width: 225px;
              height: 300px;
              position: absolute;
              left: 0;
              top: 0;
            }
          }
          &>.rightbox{
            width: 225px;
            height: 300px;
            overflow: hidden;
            position: absolute;
            margin-left: 300px;
            top: 0;
            left: 0;
            img{
              position: relative;
              width: 400px;
              height: 500px;
              display: block;
              top: 0;
              left: 0;
            }
          }
        }
      }
      &>.title{
        width: 590px;
        height: 248px;
        float: left;
        &>.box{
          float: left;
          margin: 0 10px; 
          h2{
            font-size: 18px;
            line-height: 40px;
            width: 580px;
            color: #000000;
            border-bottom: 1px solid #eeeeee;
            padding: 5px 0 15px 5px;
          }
          &>.sprice{
            height: 94px;
            width: 580px;
            margin-bottom: 15px;
            color: #8d8d8d;
            border-bottom: 1px solid #eeeeee;
            &>.price{
              float: left;
              width: 280px;
              height: 80px;
              &>.price-left{
                height: 40px;
                span{
                  font-size: 12px;
                  color: #434343;
                }  
                b{
                    font-size: 24px;
                    color: #fc5256;
                    line-height: 35px;
                  }
                
              }
              &>.price-right{
                height: 35px;
                font-size: 14px;
                color: #898989;
                padding-top: 5px;
                text-decoration: line-through;
              }
            }
            &>.record{
              float: left;
              width: 171px;
              height: 65px;
              text-align: center;
              border-left: 1px solid #eeeeee;
              &>div{
                font-size: 12px;
              }
            }
          }
          &>.xh-s-item {
            font-size: 14px;
            color: #666;
            h6 {
              line-height: 36px;
              width: 9%;
            }
            span{
              width: 40px;
              height: 4px;
              line-height: 40px;
              text-align: center;
            }
          }
          .xh-btns {
            & > .btn-left{
              width: 150px;
              height: 50px;
              background-color: #fc5256;
              border: none;
              background-image: url(/img/product/details/shopping_cart1.png);
              background-repeat: no-repeat;
              color: #fff;
              text-indent: 30px;
              background-position: 20px 15px;
              margin-right: 10px;
              cursor: pointer;
              &:hover{
               background-color: #434343; 
              }
            }
            & > .btn-right{
              width: 150px;
              height: 50px;
              color: white;
              background-color: #434343;
              border: none;
              background-image: url(/img/product/details/shopping_cart.png);
              background-repeat: no-repeat;
              color: #fff;
              text-indent: 30px;
              background-position: -140px 15px;
              margin-right: 10px;
              cursor: pointer;
              &:hover{
                background-color: #fc5256; 
               }
            }
          }
        }
      }
    }
    .xh-cut{
      border: 1px solid #eeeeee;
      &>.xh-tab{
        .text{
          color: #5a5a5a;
          font-size: 12px;
          hr{
            border-top: 1px solid #000;
          }
          p{
            padding: 0;
            margin: 0;
          }
        }
        .shopping{
          font-size: 12px;
          color: #5a5a5a;
          .purchass{
            width: 840px;
            background-color: #fafafa;
            span{
              display: block;
              float: left;
              width: 140px;
              text-align: center;
            }
          }
          .text02{
            span{
              float: right;
            }
            
          }
        }
        .comment-area{
          height: 200px;
          div{
            span{
              color: #ed5672;
              font-size: 14px;
            }
          }
          .area{
            color: #5a5a5a;
            font-size: 12px;
            padding-left: 8px;
          }
        }
        .questions-answers{
          div{
            a{
              display: block;
              float: left;
              width: 60px;
              text-decoration: none;
              padding: 5px;
              color: #000;
              text-align: center;
              font-size: 12px;
              &:active{
                background-color: #048bcd;
                color: #fff;
              }
            }
            input{
              width: 520px;
              height: 50px;
            }
            button{
              width: 100px;
              height: 54px;
              background-image: url(/img/product/details/sitestar_productdetails_put_questions_to.png);
              background-repeat: no-repeat;
              background-position: 15px 18px;
              padding-left: 30px;
              background-color: #048bcd;
              font-size: 18px;
              color: #fff;
              border: none;
              cursor: pointer;
            }
          }
        }
      }
    }
    .link{
      :hover{
        color: #048bcd;
      }
      a{
        font-size: 12px;
        color: #ed5672;
        text-decoration: underline;
        margin-left: 5px;
      }
      .d-left{
        .urll{
          width: 11px;
          height: 10px;
          background-image: url(/img/product/details/sitestar_productdetailspage_up_arrow.png);
          display: block;
          background-color: #c2c2c2;
          background-repeat: no-repeat;
          margin-top: 9px;
          margin-right: 5px;
          float: left;
        }
        .d-text{
          font-size: 12px;
          color: #000;
        }
      }
      .d-right{
        .r-urll{
          width: 11px;
          height: 10px;
          background-image: url(/img/product/details/sitestar_productdetailspage_down_arrow.png);
          display: block;
          background-color: #c2c2c2;
          background-repeat: no-repeat;
          margin-top: 9px;
          margin-right: 5px;
          float: left;
        }
        .d-text{
          font-size: 12px;
          color: #000;
        }
      }
    }
  }
}
</style>
