<template>
  <div id="product">
    <div class="navs clearfix">
      <div class="nav-name mr-2">
        <div class="top-1">
          <div class="one">玫瑰花束
            <img src="/img/product/details/icon.png" alt="">
          </div>
          <div>
            <span @click="seek">红玫瑰</span> |
            <span @click="seek">粉玫瑰</span> |
            <span @click="seek">白玫瑰</span> |
            <span @click="seek">香槟玫瑰</span> |
            <span @click="seek">桃红玫瑰</span>
          </div>
        </div>
        <div class="top-1">
          <div class="one">清新花束
            <img src="/img/product/details/icon.png" alt="">
          </div>
          <div>
            <span @click="seek($event)">马蹄莲</span> |
            <span @click="seek($event)">满天星</span>
          </div>
        </div>
        <div class="top-1">
          <div class="one">混搭花束
            <img src="/img/product/details/icon.png" alt="">
          </div>
          <div>
            <span @click="seek">百合花</span> |
            <span @click="seek">桔梗</span> |
            <span @click="seek">向日葵</span>
          </div>
        </div>
        <div class="top-1">
          <div class="one">仿真花束
            <img src="/img/product/details/icon.png" alt="">
          </div>
          <div>
            <span @click="seek">中式</span> |
            <span @click="seek">欧式</span> |
            <span @click="seek">现代</span>
          </div>
        </div>
        <div class="top-1" style="border: none;">
          <div class="one">节日花束
            <img src="/img/product/details/icon.png" alt="">
          </div>
          <div>
            <span @click="seek">母亲节</span> |
            <span @click="seek">父亲节</span> |
            <span @click="seek">教师节</span>
          </div>
        </div>
      </div>
      <div class="nav-img">
        <div class="top-1">
          <div style="float: left;" class="mr-3">
            <span class="p3">19支香槟玫瑰</span>
            <span class="p2">拥爱满怀</span>
          <img src="/img/index/flover_sz_05_512s.png" alt="">
          </div>
          <div style="float: left;" class="mr-3">
            <span class="p1">19支黄玫瑰</span>
            <span class="p2">手捧幸福</span>
            <img src="/img/index/flover_sz_07_lgq2.png" alt="">
          </div>
          <div style="float: left;">
            <span class="p1">19支白玫瑰</span>
            <span class="p2">真诚浪漫</span>
            <img src="/img/index/flover_sz_09_kjav.jpg" alt="">
          </div>
        </div>
        <div class="top-2">
          <div style="float: left;overflow: hidden;width: 595px;height: 200px;" >
          <img src="/img/index/farcer_l_03_j7wd.jpg" alt="" style="height: auto;display: inline;width: 595px;">
          </div>
          <div style="float: left;">
            <span class="p1">19支玫瑰花</span>
            <span class="p2">爱到永恒</span>
            <img src="/img/index/flover_sz_03_mocp.png" alt="">
          </div>
        </div>
        
      </div>
    </div>
    <div class="grabble mb-4 mt-4 border">
      <div class="row">
        <div class="col-4 text-center title">
          <div class="row">
            <div class="col-6 pt-1 pb-1">
              默认排序
            </div>
            <div class="col-6 pt-1 pb-1" v-if="shows" @click="asc">
              总价
              <img src="/img/product/details/down.gif" alt="">
            </div>
            <div class="col-6 pt-1 pb-1" v-else @click="desc">
              总价
              <img src="/img/product/details/up.gif" alt="">
            </div>
          </div>
        </div>
        <div class="col-4 price-searche pt-1 pb-1 text-center">
          ￥<input type="num" v-model="sp">
          - 
          ￥<input type="num" v-model="bp">
          <button @click="section">确定</button>
        </div>
        <div class="col-4 text-center goods pt-1 pb-1">
          <input type="text" v-model="kw" @keydown.13="search">
          <button @click="search">确定</button>
        </div>
      </div>
    </div>
    <div class="cards">
         <ul>
            <li v-for="(p,i) of product" :key="i" >  
              <!-- 添加购物车 -->
              <div class="baci" @click="show(i)">
                <div class="xh-s-item xhs clearfix" v-show="i==visible" :data-i="i">
                    <span class="float-left">数量：</span>
                    <div class="float-left xz-number d-flex">
                       <button class="btn" @click="minus">-</button>
                      <span class="s1">{{n}}</span>
                      <button class="btn" @click="add">+</button>
                      <span class="s2">库存99999</span>
                    </div>
                    <button class="btns" @click="addcart" :data-lid="p.lid"
                    :data-price="p.price" :data-title="p.title" :data-img="p.md" :data-count="n">确定</button>
                 </div>
              </div>
              <!-- 照片 -->
              <router-link :to="`/details/${p.lid}`">
                <img :src="p.md" alt="card-img-top">
              </router-link>
              <!-- 价格参数 -->
              <div class="card-body">
                <router-link :to="`/details/${p.lid}`">
                  <b>{{p.title}}</b>
                </router-link>
                <p style="color: #ed5672;cursor: pointer;">{{p.fname}}</p>
                <p>价格：
                  <span>￥{{p.price.toFixed(2)}}</span>
                </p>
                <p style="color: black;">{{p.subhead}}</p>
              </div>
            </li>
         </ul>
    </div>
    <h6 class="mb-3 p-2 text-muted small">
          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-end">
              <li class="page-item" :class="{'d-none':pno==0}">
                <a class="page-link bg-transparent" href="javascript:;" @click="change(-1,$event)">上一页</a>
                </li>
              <li class="page-item" v-for="i of pageCount" :key="i" :class="{active:i-1==pno}">
                <a class="page-link " :class="i-1==pno?'border':'bg-transparent'" href="javascript:;" @click="changepage(i-1)">{{i}}</a>
              </li>
              <li class="page-item" :class="{'d-none':pno==pageCount-1}">
                <a class="page-link bg-transparent" href="javascript:;"  @click="change(+1,$event)">下一页</a>
                </li>
            </ul>
          </nav>
        </h6> 
  </div>
</template>

<script>
export default {
  props:["kw"],
  data(){
    return {
      product:[{price:0}],
      pageCount:0,
      pno:0,
      i:0,
      visible:-1,
      n:1,
      shows:true,
      sp:'',
      bp:''
    }
  },
  methods:{
    // 添加购物车
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
    // 价格搜索
    searchs(pno=0){
        this.axios.get('/sort/searchs',{
          params:{
            sp:this.sp,
            bp:this.bp
            }
        }).then(result=>{
            this.product=result.data.data;
            this.pno=result.data.pno;
            this.pageCount=result.data.pageCount;
            
      })
    },
    // 调用searchs
    section(){
      this.searchs();
      
    },
    // 升序
    sortAsc(pno=0){
      this.axios.get('/sort/asc').then(result=>{
          this.product=result.data.data;
          this.pno=result.data.pno;
          this.pageCount=result.data.pageCount;
      })
    },
    // 降序
     sortDesc(pno=0){
      this.axios.get('/sort/desc').then(result=>{
          this.product=result.data.data;
          this.pno=result.data.pno;
          this.pageCount=result.data.pageCount;
      })
    },
    desc(){
      this.sortDesc();
      this.shows=true;
    },
    asc(){
      this.sortAsc();
      this.shows=false;
    },
    // 数量加减
    minus(){
        if(this.n>1){
          this.n--;
        }
      },
      add(){
        this.n++
      },
      // 是否显示
    show(i){
      this.visible=i
    },
    // 标题搜索
    seek(e){
            this.kw=e.target.innerHTML;
            this.$router.push('/products/' + this.kw)
        },
    // 模糊搜索
    search(){
      this.load();
    },
    // 下一页
    change(d,e){
      if(e.target.className.indexOf("d-none")==-1){
      this.changepage(parseInt(this.pno)+parseInt(d))
      }
    },
    changepage(i){
      this.load(i)
    },
    // 模糊查询
    load(pno=0){
        this.axios.get('/products',
          {
            params:{
              kw:this.kw,
              pno
            }
          }).then(result=>{  
            this.product=result.data.data;
            this.pno=result.data.pno;
            this.pageCount=result.data.pageCount;
      })
    }
  },
  created(){
    this.load();
  },
  watch:{
    kw(){
      this.load();
      
    }
  }
}
</script>

<style lang="scss">
#product{
    width: 1200px;
    margin: 0 auto;
    margin-top: 15px;
    .navs{   
      .nav-name{
          width: 290px;
          height: 417px;
          float: left;
          background-color: #ed5672;
          color: #fff;
          font-size: 14px;
          padding: 5px;
          .top-1{
              padding: 5px 5px 5px 0;
              width: 274px;
              height: 81px;
              border-bottom: 1px solid #fff ;
              .one{
                &:hover{
                    color: #000;
                }
                  img{
                      float: right;
                      padding-top: 5px;
                  }
              }
              div{
                  padding: 7px;
                  font-size: 12px;
                  cursor: pointer;
              }
          }
      } 
       .nav-img{
           
           float: left;
        .top-1{
            width: 902px;
            height: 200px;
            margin-bottom: 12px;
            div{
               width: 290px;
               height: 200px;
               position: relative; 
               .p1{
                    position: absolute;
                    top: 85px;
                    left: 31px;
                    font-size: 18px;
                    color: #443232;
               }
               .p3{
                  position: absolute;
                  top: 85px;
                  left: 15px;
                  font-size: 18px;
                  color: #443232;
              }
                .p2{
                    position: absolute;
                    top: 115px;
                    left: 63px;
                    font-size: 15px;
                    color: #c5c1c1;
                }
            }
        }
        .top-2{
            &>div:last-child{
                margin-left: 17px;
                position: relative;
                .p1{
                    position: absolute;
                    top: 85px;
                    left: 31px;
                    font-size: 18px;
                    color: #443232;
               }
                .p2{
                    position: absolute;
                    top: 115px;
                    left: 63px;
                    font-size: 15px;
                    color: #c5c1c1;
                }
            }
            
            
        }
       }
    }
    .grabble{
       height: 33px;
       padding: auto;
       color: #443232;
       font-size: 12px;
       .title{
            .row{
                div{
                    border-right: 1px solid #d4d4d4;
                }
            }
       }
       .price-searche{
        border-right: 1px solid #d4d4d4;
        input{
            display: inline-block;
            width: 54px;
            height: 20px;
        }
        button{
         display: inline-block;
         width: 54px;
         height: 20px; 
         border: none;
        }
       }
       .goods{
        input{
            display: inline-block;
            width: 125px;
            height: 20px;
        }
        button{
         display: inline-block;
         width: 54px;
         height: 20px; 
         border: none;
        }
       }
    }
    .cards{
        overflow: hidden;
        display: block;
        padding: 0;
        height: 1060px;
        ul{
            list-style: none;
            padding: 0;
            li{
                vertical-align: top;
                width: 230px;
                float: left;
                border: 1px solid #f4f4f4;
                margin-right: 10px;
                margin-bottom: 10px;
                padding: 15px;
                position: relative;
                .baci{
                    background-image: url(/img/product/details/carta-img4.png),url(/img/product/details/carta-img5.png);
                    background-repeat: no-repeat; 
                    z-index: 105;
                    position: absolute;
                    width: 35px;
                    height: 35px;
                    right: 10px;
                    top: 30px;
                    cursor: pointer;
                  .xh-s-item{
                    position: absolute;
                    top: 120px;
                    right: 0px;
                    height: 183px;
                    background-color: #fff;
                  span{
                      font-size: 14px;
                      padding-top: 5px;
                  }
                  .xz-number{
                      .btn{
                          background-color: #fff;
                      }
                      .s1{
                          width: 40px;
                          height: 38px;
                          line-height: 30px;
                          background-color: #eeeeee;
                          text-align: center;
                      }
                      .s2{
                          height: 38px;
                          line-height: 38px; 
                          text-align: center;
                      }
                  }
                    .btns{
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 45px;
                        background-color: #dd2828;
                        left: 0;
                        color: #fff;
                        border: none;
                    }
                  }
                }
                img{
                    width: 200px;
                    height: 200px;
                    padding: 10px;
                    vertical-align: middle;
                    text-align: center;
                    cursor: pointer;
                }
                div{
                    width: 200px;
                    float: left;
                    padding: 0 0 5px 10px;
                    b{
                        font-size: 12px;
                        color: #000000;
                        cursor: pointer;
                    }
                    p{   
                        font-size: 12px;
                        color: #acacac;
                        margin:  0;
                        padding: 5px 0;
                        span{
                            color: #ff3c00;
                        }
                    } 
                }
                
            }
        }
    }
    
  
}

</style>