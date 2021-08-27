<template>
<div class="register">
    <img src="/img/index/dy_dah2.jpg" alt="">
    <waike title="注册" :close="close">
      <template #content>
          <div class="row">
            <span class="label">用户名</span>:
            <input v-model="uname" />
          </div>
          <div class="row">
            <span class="label">密码</span>:
            <input type="password" v-model="upwd"/>
          </div>
          <div class="row">
            <span class="label">确认密码</span>:
            <input type="password" v-model="upwd2"/>
          </div>
      </template>
      <template #btns>
          <button @click="register">注册</button>
          <button @click="close">取消</button>
      </template>
  </waike>
</div>
</template>

<script>
import Waike from "./waike"

export default {

  components:{ Waike },

  data(){
    return {
      uname:"",
      upwd:"",
      upwd2:""
    }
  },
  methods: {
    close(){
      this.$router.push('/login')
    },
    register() {
      if(this.upwd==this.upwd2){
        this.axios.post(
          "/users/signup",
          `uname=${this.uname}&upwd=${this.upwd}`
        ).then(result=>{
          if(result.data.ok==1){
              alert("注册成功");  
              this.$router.push('/login')
          }else{
            alert(`注册失败:${result.data.msg}`)
          }
        }) 
      }else{
        alert("两次密码输入不一致，请重新输入")
      }
    },
  }
};
</script>
