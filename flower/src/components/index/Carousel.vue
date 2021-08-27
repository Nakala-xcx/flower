<template>
  <div class="bm-banner">
      <div class="carousel"  id="demo" :style="{width:innerWidth+'px'}" @mouseenter="stop" @mouseleave="start">
        <!-- 展示图 -->      
        <div class="carousel-inner" :style="ulStyle" :class="ulClass">  
          <div v-for="(m,i) of imgs" :key="i" class="carousel-item" :style="{width:innerWidth+'px'}">
            <img :src="m.img" alt="" :style="{width:innerWidth+'px'}">
        </div>
        <div class="carousel-item" :style="{width:innerWidth+'px'}">
            <img :src="imgs[0].img" alt="" :style="{width:innerWidth+'px'}">
        </div>
        </div>
        <!-- 左右控制 -->
        <a href="javascript:;" class="carousel-control-prev" @click="move(-1)">
             <img src="/img/index/jslider-img3.png" alt=""> 
        </a>
        <a href="javascript:;" class="carousel-control-next" @click="move(1)">
            <img src="/img/index/jslider-img4.png" alt=""> 
        </a>
        <!-- 指示符列表 -->
        <ul class="carousel-indicators">
          <li v-for="(m,idx) of imgs" :key="idx" :class="idx==i?'active':''" @click="moveTo(idx)"></li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      imgs:[{img:''}],
      ulClass:{
        hasTrans:true
      },
      i:0,
      innerWidth:520,
      timer:null,
      canClick:true
    }
  },
  methods:{
    stop(){
      clearInterval(this.timer);
    },
    start(){
      this.timer=setInterval(()=>{
        this.move(1);
      },3000)
    },
    move(i){
      if(this.canClick){
        this.canClick=false;
        if(i==-1&&this.i==0){//如果向右移动，且正在显示第1张图片，就要骗
          this.ulClass.hasTrans=false;//去掉父级div上的transition样式类
          setTimeout(()=>{//等50ms后，再进行后续操作
            this.i=this.imgs.length; //悄悄的将父级div移动到最左边
            setTimeout(()=>{//等50ms后，再进行后续操作
              this.ulClass.hasTrans=true;//打开父级div上的transition效果
              this.i+=i;//正式向右移动一次
              setTimeout(()=>{//200s后，才允许单击
                this.canClick=true;
              },200)
            },50)
          },50)
        }else if(i==1&&this.i==this.imgs.length-1){
          //如果向左移动，且现在已经显示最后一张了
          this.i+=i;//可以先带transition效果，左移一次
          setTimeout(()=>{//等左移完，再去掉transition效果，骗用户
            this.ulClass.hasTrans=false;
            setTimeout(()=>{//等50ms后，瞬间将父级div移动到显示第一张图片
              this.i=0;
              setTimeout(()=>{//等50ms后，再次启用transition，为下次提供动画
                this.ulClass.hasTrans=true;
                setTimeout(()=>{//稍等片刻之后允许单击
                  this.canClick=true;
                })
              },50)
            },50)
          },200)
        }else{//如果不是两端的情况，则保持原来的逻辑
          this.i+=i;
          setTimeout(()=>{
            this.canClick=true;
          },300)
        }
      }
    },
    moveTo(i){
      if(this.canClick){
        this.i=i;
        this.canClick=false;
        setTimeout(()=>{
          this.canClick=false;
        },600)
      }
    }
  },
  mounted(){
    this.axios.get('/carousel').then(result=>{
      // console.log(result);
      this.imgs=result.data;
    })
  },
  computed:{
    ulStyle(){
      var width=this.innerWidth*(this.imgs.length+1)+"px";
      var marginLeft=-this.i*this.innerWidth+"px";
      return { width, marginLeft}
    }
  }
}
</script>
<style scoped>
.bm-banner>.carousel{
  overflow: hidden;
  width: 520px;
}
.bm-banner>.carousel:after{
    content:"";
    display:block;
    clear:both;
  }
.bm-banner>.carousel>.carousel-inner.hasTrans{
    transition: all 0.5s linear;
  }
.carousel>.carousel-inner>.carousel-item{
    display:block;
    float:left;
  }
  .carousel>.carousel-inner>.carousel-item>a:last-child{
    display:block;
    height:50px;
    color:#fff;
    text-align:center;
    font-size:15px;
    line-height:50px;
    text-decoration:none;
    background-color:#f68cc6;
  }
  /*重写指示符的样式*/
  .carousel-indicators{
    bottom:130px;
  }
  .carousel-indicators li{
    width:15px;height:15px;
    background-color:#fff;
    margin-left:6px;
    margin-right:6px;
    border-radius: 50%;
    top:115px;
  }
   .carousel-indicators>li:hover, .carousel-indicators>li.active{
    transform:scale(1.3)
  }
  .carousel-indicators>li:first-child{
    background-color:#f68cc6;
  }
  .carousel-indicators>li:nth-child(2){
    background-color:#fa9c77;
  }
  .carousel-indicators>li:nth-child(3){
    background-color:#ba4b5d;
  }
</style>