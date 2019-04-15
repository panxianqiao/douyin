<template>
  <div class="footer">
    <div class="tabs">
      <div
        class="item"
        v-for="(item,index) in tabs"
        :key="index"
      >
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonFooter",
  props:{
    tabs:{
      type:Array,
      default:[]
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  height: 60px;
  .tabs {
    display: flex;
    .item {
      flex: 1;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      color: #e6e6e6;
    }
  }
}
</style>
