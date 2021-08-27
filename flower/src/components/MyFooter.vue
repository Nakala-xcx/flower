<template>
    <div class="my-footer">
        <div class="search">
            <div class="search-tag">
                <img src="img/index/footer_img_23_b1jx.png" alt="">
                <span>鲜花搜索</span>
                <div class="input-text">
                    <input type="text" value="请输入关键字" v-model="kw" @keydown.13="search">
                    <span @click="search">搜索</span>
                </div>     
                <div class="test">
                    <div @click="seek">红玫瑰</div>
                    <div @click="seek">白玫瑰</div>
                    <div @click="seek">香槟玫瑰</div>
                    <div @click="seek">马蹄莲</div>
                    <div @click="seek">满天星</div>
                    <div @click="seek">百合花</div>
                    <div @click="seek">桔梗</div>
                </div>
            </div>
        </div>
        <div class="footer-top">
            <div class="promise">
                <div class="d1">
                    <div>
                        <img src="/img/index/footer_iconb_modz.png" alt="">
                        <div class="text-a">品质保障</div>
                        <span>严格品质把关 品质值得信赖</span>
                    </div> 
                   <div>
                        <img src="/img/index/footer_icona_jdrr.png" alt="">
                        <div class="text-a">特色服务</div>
                        <span>私人订制，细心服务传递您的爱</span>
                    </div>
                    <div>
                        <img src="/img/index/footer_icon_drlb.png" alt="">
                        <div class="text-a">心动价格</div>
                        <span>精心市场调研 价格打动你的心</span>
                    </div>
                    <div>
                        <img src="/img/index/footer_iconc_orta.png" alt="">
                        <div class="text-a">支付安全</div>
                        <span>专属支付平台 保障交易安全</span>
                    </div>   
                </div>
                <div class="d2">
                    <img src="/img/index/ewm_lyly.png" alt="">
                </div>
            </div>
            <div class="site">
                    <div>版权所有：©2016-2022 &nbsp;&nbsp;&nbsp;&nbsp;怦然心动鲜花网&nbsp;&nbsp;&nbsp;&nbsp;公安网备案号：12310502027XXX&nbsp;&nbsp;&nbsp;&nbsp;沪ICP备11001234号&nbsp;&nbsp;&nbsp;沪B1-20161012-X号</div>
                    <div>我司地址：成都市锦江区有情人终成眷属路1314号&nbsp;&nbsp;联系电话：028-520-1314&nbsp;&nbsp;联系邮箱：forverlove@XXX.com</div>
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            kw:''
        }
    },
    methods:{
        seek(e){
            this.kw=e.target.innerHTML;
            this.$router.push('/products/' + this.kw)
        },
        search(){
            this.$router.push('/products/' + this.kw)
        }
    },
    // 提取地址栏数据
    created(){
        this.kw=this.$route.params.kw
    },
    // 监听地址栏变化
    watch:{
        $route(){
           this.kw=this.$route.params.kw 
        }
    }
}
</script>
<style scoped>
.my-footer{
    background-color: #000; 
}
.my-footer .search{
    background-color: rgb(252, 82, 86);  
}
.my-footer .search>.search-tag{
    width: 1200px;
    height: 110px;
    position: relative;
    left: 0;
    right: 0;
    margin-left: 0;
    margin: 0 auto;
}
.my-footer .search>.search-tag>img{
    left: 320px;
    top: 14px;
    position: absolute;
    z-index: 100;
    width: 120px;
    height: 80px;
}
.my-footer .search>.search-tag>span{
    left: 350px;
    top: 44px;
    position: absolute;
    z-index: 101;
    width: 150px;
    height: 30px;
}
.my-footer .search>.search-tag>.input-text>span{
    cursor: pointer;
    text-align: center;
    width: 50px;
    height: 35px;
    padding: 7px;
}
.input-text>span:hover{
    background-color: #434343;
}
.my-footer .search>.search-tag>.input-text{
    left: 480px;
    top: 31px;
    position: absolute;
    z-index: 102;
    width: 520px;
    height: 39px;
    border: 1px solid #fff;
    background-color: #fff;
    padding: 1px;
    }
.my-footer .search>.search-tag>.input-text>input{
    width: 464px;
    height: 35px;
    outline: none;
    border: 0;
    padding-top: 1px;
    background-color: rgb(252, 82, 86);
    color: #fff;
    font-size: 12px;
}

.my-footer .search>.search-tag>.test{
    left: 480px;
    top: 57px;
    position: absolute;
    z-index: 103;
    width: 584px;
    height: 40px;
    }
.my-footer .search>.search-tag>.test>div{
    width: 80px;
    float: left;
    margin-top: 20px;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
}
.my-footer .footer-top{
    width: 1200px;
    margin: 0 auto;
}
    .my-footer .footer-top>.site{
        color: #666666;
        font-size: 12px; 
        border-top: 1px solid #434343;
        padding: 10px; 
        text-align: center;   
    }
    .my-footer .footer-top>.site>:first-child{
        margin-top: 10px; 
        padding-bottom: 5px;      
    }
    .my-footer .footer-top>.promise{
        height: 200px;
        overflow: hidden;
    }
    
    .my-footer .footer-top>.promise>.d1>div{
        width: 200px; 
        margin: 10px;
        float: left;
        text-align: center;
    }
    .my-footer .footer-top>.promise>.d1>div>.text-a{
        font-size: 20px;
        color: rgb(204, 204,204)
    }
    .my-footer .footer-top>.promise>.d1>div>span{
        font-size: 12px;
        color: rgb(102, 102, 102);
    }
    .my-footer .footer-top>.promise>.d1>div>img{
        margin: 20px 0;
    }
    .my-footer .footer-top>.promise>.d1>:last-child{
        border-right: 1px solid #434343;
    }
    .my-footer .footer-top>.promise>.d2>img{
        margin: 30px 0;
        padding-left: 20px;
        
    }
</style>