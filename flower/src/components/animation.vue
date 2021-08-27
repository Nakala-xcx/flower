<template>
    <div class="animation">
        <img src="/img/index/banner_02_l115.jpg" alt="">
        <div class="d1">
            <img src="/img/index/xn_03_zfq3.png" alt="">
        </div>
        <div class="d2">
            <div>邂逅爱情,你是我生命中较美丽的遇见</div>
            <img src="/img/index/tx_19_5hxo.png" alt="">
        </div>
        <div class="d3">
            <img src="/img/index/yj_15_ewet.png" alt="">
        </div>
        <div class="preface">
                <div class="d4">
                    <ul>
                        <li>用</li>
                        <li>一</li>
                        <li>朵</li>
                        <li>花</li>
                        <li>开</li>
                        <li>的</li>
                        <li>时</li>
                        <li>间</li>
                    </ul>    
                </div>
                <div class="d5">
                    <ul>
                        <li>爱</li>
                        <li>上</li>
                        <li>一</li>
                        <li>种</li>
                        <li>认</li>
                        <li>真</li>
                        <li>的</li>
                        <li>消</li>
                        <li>遣</li>
                    </ul> 
                </div>
                <div class="d6">
                    <ul>
                        <li>抢</li>
                        <li>先</li>
                        <li>预</li>
                        <li>定</li>
                        <li>11</li>
                        <li>-</li>
                        <li>14</li>
                        <li>使</li>
                        <li>命</li>
                        <li>必</li>
                        <li>达</li>
                    </ul>
                </div>
            
        </div>
    </div>
</template>
<style scoped>
.animation>img{
    display: block;
    width: 100%;
}
.animation>.d1{
    position: absolute;
    left: 1900px;
    top: 250px;
    animation-name: dove;
    animation-duration: 4s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
}
@keyframes dove{
      /* 起始点 */
      0%{
        transform: translateX(0);
        opacity: 0;
      } 
      100%{
        transform: translateX(-1100px);
        opacity: 1;
      }
    }
.animation>.d2{
    position: absolute;
    left: 495px;
    top: -100px;
    font-size: 14px;
    color: rgb(68,50,50);
    letter-spacing: 4px;
    animation-name: torque;
    animation-duration: 3s;
    /* animation-delay: 1s; */
    animation-timing-function: ease;
    animation-fill-mode: forwards;
}
@keyframes torque{
    0%{
        transform: translateY(0);
        opacity: 0;
    }
    100%{
        transform: translateY(590px);
        opacity: 1;
    }
}
.animation>.d3{
    position: absolute;
    top: 525px;
    left: 0px;
    animation-name: text;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
}
@keyframes text{
    0%{
        transform: translateX(0);
        opacity: 0;
    }
    100%{
        transform: translateX(560px);
        opacity: 1;
    }
}

.animation>.preface{
   color: rgb(252, 82, 86);
   position: absolute;
   left: 0px;
   top: 0px;  
   animation-name: box;
   animation-duration: 3s;
   animation-timing-function: ease;
   animation-fill-mode: forwards; 
}
ul,li{
     list-style: none;
}
.animation>.preface>.d4{
    font-size: 20px;
    letter-spacing: 0px;
    position: absolute;
    left: 1770px;
    top: 230px; 
    margin: 0px;
    padding: 0 10px;
    border-right: 1px solid rgb(252, 82, 86);
    
}
.animation>.preface>.d5{
    font-size: 20px;
    letter-spacing: 0px;
    position: absolute;
    left: 1720px;
    top: 270px; 
    margin: 0;
    padding: 0 10px;
    border-right: 1px solid rgb(252, 82, 86);
}
.animation>.preface>.d6{
    font-size: 14px;
    letter-spacing: 0px;
    position: absolute;
    left: 1675px;
    top: 230px; 
    margin: 0;
    padding: 0 10px;
    border-right: 1px solid rgb(252, 82, 86);
}
@keyframes box{
    0%{
        transform: translateX(0);
        opacity: 0;
    }
    100%{
        transform: translateX(-375px);
        opacity: 1;
    }
}
</style>