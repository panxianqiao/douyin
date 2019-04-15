<template>
  <container>
    <common-header
      slot="header"
      :title="headerOption.title"
      :leftIcon="headerOption.leftIcon"
      :leftText="headerOption.leftText"
      :rightIcon="headerOption.rightIcon"
    >
    </common-header>

    <div
      class="video-wrap"
      v-for="(item,index) in videoList"
      :key="index"
    >
      <div
        class="poster"
        ref="poster"
        v-show="!item.isPaly"
        @click="handlePaly(item,index)"
      >
        <img :src="item.poster">
      </div>
      <video
        class="video"
        ref="video"
        :height="item.height"
        :width="item.width"
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        playsinline="true"
        preload="auto"
        x-webkit-airplay="allow"
        x5-video-orientation="portrait"
        loop="loop"
        @click="pause(item,index)"
        :poster="item.poster"
        :src="item.url"
      ></video>
      <span
        class="play"
        ref="icon"
        v-show="!item.isPaly"
      ></span>
    </div>

    <common-footer
      slot="footer"
      :tabs="footerTabs"
    ></common-footer>
  </container>
</template>

<script>
export default {
  name: "Index",

  data() {
    return {
      // header组件配置
      headerOption: {
        title: "抖音demo",
        leftIcon: "camera",
        leftText: "随拍",
        rightIcon: "search"
      },
      // footer组件配置
      footerTabs: [
        {
          name: "首页"
        },
        {
          name: "关注"
        },
        {
          name: "消息"
        },
        {
          name: "我"
        }
      ],
      // 当前选中视频下标
      current: 0,
      // 模拟数据
      videoList: [
        {
          width: 1,
          height: 1,
          isPaly: false,
          url:
            "http://video.jishiyoo.com/eb978106f01f4eed95db9f537d7d9be8/6dbdc80e5c754784abe2e5be96c5feed-514a8b14506d55be68a9d9e3c2810057-ld.mp4",
          poster:
            "http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png"
        },
        {
          width: 1,
          height: 1,
          isPaly: false,
          url:
            "http://video.jishiyoo.com/4bd2b77bad9b45639564becc2bed8e29/30d4e2b677074d079e8c03698edee232-32ca5c6feec9c6445decdd413320bcea-ld.mp4",
          poster:
            "http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552140113110.png"
        },
        {
          width: 1,
          height: 1,
          isPaly: false,
          url:
            "http://video.jishiyoo.com/f843c93d4f3f4bee844690fe1fdfc750/28e2548c47ce4d0cb310697f0ca4c7a3-14818dd00765a9a86871da6734b1be28-ld.mp4",
          poster:
            "http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552117102331.png"
        },
        {
          width: 1,
          height: 1,
          isPaly: false,
          url:
            "http://video.jishiyoo.com/c082827a58584a2c864fa403f1aafabf/d5333562c5c74bcdb5bd3fe92073cd9c-6375039a2dd07d44dfaf66c1a32287ff-ld.mp4",
          poster:
            "http://bendipin.oss-cn-beijing.aliyuncs.com/images/file-1552022662595.png"
        }
      ]
    };
  },

  methods: {
    // 开始播放
    handlePaly(item, index) {
      this.current = index;
      let ele = this.$refs.video[this.current];
      this.videoList[this.current].isPaly = true;
      this.videoList[this.current].width = "100%";
      this.videoList[this.current].height = "100%";
      this.$nextTick(function() {
        ele.play();
      });
    },

    // 暂停/播放
    pause(item, index) {
      let ele = this.$refs.video[index];
      if (ele.paused) {
        // 当前状态
        ele.play();
      } else {
        ele.pause();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.video-wrap {
  background: red;
  position: relative;
  width: 100%;
  height: 100%;
  .poster {
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .video {
    width: 100%;
    width: 100%;
    object-fit: fill; // 解决全屏播放会产生白边的问题
    z-index: 8;
  }
  .play {
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -32px;
    margin-left: -32px;
    background: url("../assets/images/common/play.png") no-repeat center;
  }
}
</style>
