<template>
  <div class="register">
    <img src="/img/index/dy_dah2.jpg" alt="" />

    <waike title="登录" :close="close">
      <template #content>
        <div class="row">
          <span class="label">用户名</span>:&nbsp;&nbsp;
          <input v-model="uname" />
        </div>
        <div class="row">
          <span class="label">密码</span>:&nbsp;&nbsp;
          <input type="password" v-model="upwd" />
        </div>
        <div class="clearfix" style="font-size:13px">
          <input
            type="checkbox"
            v-model="remember"
            class="float-left ml-5 "
          />记住密码
          <router-link :to="`/changepwd`" class="float-right mr-5"
            >修改密码</router-link
          >
        </div>
      </template>
      <template #btns>
        <button @click="login">登录</button>
        <button @click="close">取消</button>
      </template>
    </waike>
  </div>
</template>
<script>
import Waike from "../components/waike";
import { mapState, mapActions } from "vuex";

export default {
  components: { Waike },
  data() {
    return {
      uname: "",
      upwd: "",
      show: "",
      remember: "",
    };
  },
  computed: { ...mapState(["uid"]) },
  methods: {
    ...mapActions(["vlogin"]),
    close() {
      this.$router.push("/");
    },
    login() {
      this.vlogin({
        uname: this.uname,
        upwd: this.upwd,
      })
        .then(() => {
          if (this.remember) {
            localStorage.setItem("uname", this.uname);
            localStorage.setItem("uid", this.uid);
          } else {
            sessionStorage.setItem("uname", this.uname);
            sessionStorage.setItem("uid", this.uid);
          }
          alert("登录成功");
          this.$router.push("/");
          window.location.href=document.referrer;
        })
        .catch((msg) => {
          alert(`登录失败:${msg}`);
        });
    },
  },
};
</script>
<style scoped>
.register > img {
  width: 100%;
}
</style>
