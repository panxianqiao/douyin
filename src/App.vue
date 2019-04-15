<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  background-color: #f7f7f7;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  font: tahoma, arial, Helvetica, Arial, sans-serif;
}
</style>
