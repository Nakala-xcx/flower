<template>
<div class="register">
    <img src="/img/index/dy_dah2.jpg" alt="">
    <waike title="修改密码" :close="close">
      <template #content>
          <div class="row">
            <span class="label">旧密码</span>:
            <input type="password" v-model="oldupwd"/>
          </div>
          <div class="row">
            <span class="label">密码</span>:
            <input type="password"  v-model="upwd"/>
          </div>
          <div class="row">
            <span class="label">确认密码</span>:
            <input type="password" v-model="upwd2"/>
          </div>
      </template>
      <template #btns>
        <button @click="changePwd">修改密码</button>
        <button @click="close">取消</button>
      </template>
  </waike>
</div>
</template>
<script>
import Waike from "../components/waike"
import {mapState} from "vuex"

export default {
  
  data(){
    return {
      oldupwd:"",
      upwd:"",
      upwd2:""
    }
  },
  computed:{
     ...mapState(["uid"])
  },
  components:{ Waike },
  methods:{
    close(){
      this.$router.push('/login')
    },
    changePwd(){
      if(this.uid>0){
        if(this.upwd==this.upwd2){
          this.axios.post(
            "/users/changepwd",
            `uid=${this.uid}&oldupwd=${this.oldupwd}&upwd=${this.upwd}`
          ).then(result=>{
            if(result.data.ok==1){
              alert("修改成功,请重新登录");
              this.$router.push('/login')
            }else{
              alert(`修改失败:${result.data.msg}`)
            }
          })
        }else{
          alert("两次密码输入不一致，请重新输入")
        }
      }else{
        alert("请先登录")
        this.close()
      }
    }
  }
}
</script>
