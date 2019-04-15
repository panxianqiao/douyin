<template>
  <div class="page-wrapper">
    <slot
      name="header"
      class="header"
    />
    <div
      class="page-content"
      ref="content"
    >
      <slot />
    </div>
    <slot
      name="footer"
      class="footer"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.page-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .page-content{
    width: 100%;
    height: 100%;
  }
  .footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 10;
  }
}
</style>
