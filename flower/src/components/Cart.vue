<template>
  <div id="cart" :class="{ 'd-none': hid }">
    <p>
      <span>{{ counts }}</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counts: 0,
      hid: true,
    };
  },

  mounted(){
    this.setCounts()
  },
  methods: {
    setCounts() {
      var uid =
        localStorage.getItem("uid") || sessionStorage.getItem("uid") || "";
      if (uid !== "") {
        // 执行axios
        this.axios
          .get("/cart/cartSums", {
            params: { uid },
          })
          .then((result) => {
            var rows = result.data.data;
            var sum = 0;
            for (var i of rows) {
              sum += i.count;
            }
            this.counts = sum;
            if (this.counts != 0) {
              this.hid = !this.hid;
            }
          });
      }
    },
  },
};
</script>
<style scoped>
#cart {
  width: 120px;
  height: 40px;
  background-image: url(/img/index/background.png);
  background-repeat: no-repeat;
  background-position: 40px -599px;
  position: fixed;
  right: 255px;
  bottom: 105px;
}
#cart > p {
  background-image: url(/img/index/background.png);
  background-repeat: no-repeat;
  background-position: 0 -642px;
  position: fixed;
  right: 270px;
  bottom: 90px;
  height: 40px;
  padding-left: 36px;
  line-height: 36px;
  font-size: 14px;
  margin-right: 9px;
  float: left;
}
</style>
