<template>
  <div class="waike">
    <div class="dialog">
      <div class="title">
        <span class="txt">{{title}}</span>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="btns">
        <slot name="btns"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["title"],
  data(){
    return {

    }
  },
  methods:{
    login(){
      alert("登陆成功")
    }
  }
}
</script>
<style lang="scss">
.waike{
  .dialog{
    background-color:#fff;
    width:320px;
    border:1px solid #aaa;
    transform:translate(-50%,-50%);
    position:absolute;
    top:50%;
    left:50%;
    >.title{
      height:36px;
      background-color:#e4393c;
      color:#fff;
      line-height:36px;
      >.txt{
        margin-left:10px;
      }
      >.close{
        float:right;
        cursor:pointer;
        margin-right:10px;
        &:hover{
          font-size:1.2em;
        }
      }
    }
    >.content{
      >.row{
        margin:5px 10px;
        >.label{
          display:inline-block;
          width:80px;
          text-align:right;
        }
      }
    }
    >.btns{
      text-align:center;
      border-top:1px solid #ccc;
      height:40px;
      line-height:30px;
      >button{
        margin-right:20px;
        margin-left:20px;
      }
    }
  }
}
</style>