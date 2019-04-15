<template>
  <div class="header">
    <div
      class="icon"
      :class="leftIcon"
    >
      {{leftText}}
    </div>
    <div class="title">
      {{title}}
    </div>
    <div
      class="icon"
      :class="rightIcon"
    ></div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  props:{
    leftText:{
      type:String,
      default:""
    },
    leftIcon:{
       type:String,
      default:""
    },
    title:{
      type:String,
      default:""
    },
    rightIcon:{
       type:String,
      default:""
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: 60px;
  .icon {
    min-width: 48px;
    height: 48px;
    line-height: 48px;
    color: #e6e6e6;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    background-size: 48px 48px;
  }
  .camera {
    left: 26px;
    background: url("../../assets/images/common/camera.png") no-repeat left
      center;
    padding-left: 40px;
  }
  .title {
    height: 100%;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: #e6e6e6;
    margin: 0 100px;
  }
  .search {
    right: 26px;
    background: url("../../assets/images/common/search.png") no-repeat right
      center;
  }
}
</style>
