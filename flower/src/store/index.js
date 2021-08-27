import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:false,
    uid:0,
    uname:""
  },
  mutations: {  
    loginOK(state,uname){
      state.islogin=true;
      state.uname=uname
    },
    setUid(state,uid){
      state.uid=uid;
    },
    setUname(state,uname){
      state.uname=uname;
    }
  },
  actions: {
   vlogin(context,form){
     return new Promise(
       function(resolve,reject){
         axios.post(
           "users/login",
           `uname=${form.uname}&upwd=${form.upwd}`
         ).then(result=>{
          if(result.data.ok==1){
            context.commit(
              "setUid",result.data.uid
            );
            context.commit(
              "setUname",result.data.uname
            );
            context.commit(
              "loginOK",result.data.uname
            )
            resolve();
          }else{
            reject(result.data.msg)
          }
         })
       }
     )
   }
  },
  modules: {
  }
})
