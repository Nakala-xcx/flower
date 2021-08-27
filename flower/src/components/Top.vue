<template>
  <div>
    <p class="btntop" v-show="btnFlag" @click="backTop"></p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      btnFlag:false
    }
  },
  mounted(){
    window.addEventListener('scroll',this.scrollToTop)
  },
  destroyed(){
    window.removeEventListener('scroll',this.scrollToTop)
  },
  methods:{
    // 点击图片回到顶部
    backTop(){
      let timer=setInterval(()=>{
        let ispeed = Math.floor(-this.scrollTop / 5)
             document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
             if(this.scrollTop === 0) {
                clearInterval(timer)
              }
      },16)
    },
    scrollToTop() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.scrollTop = scrollTop
        if(this.scrollTop >200) {
            this.btnFlag = true
        } else {
            this.btnFlag = false
        }
      }
  }
}
</script>
<style scoped>
div{
   position:fixed;bottom:100px;right:38px
}
.btntop{
  background-image: url(/img/index/top.png);
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: -84px 0;
 
}
</style>