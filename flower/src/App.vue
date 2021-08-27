<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
    <top></top>
    <cart></cart>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
