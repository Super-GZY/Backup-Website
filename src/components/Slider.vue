<template>
  <div class="slider">
    <el-carousel :interval="3000" arrow="always" trigger="click" height="6rem" >
      <el-carousel-item
        v-for="(item, index) in sliderItem"
        :key="index"
        :style="{background: 'url('+item.src+')',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}"
      >
        <!-- <img :src="item.src" alt v-if="index=4" /> -->
        <!-- <video loop muted autoplay="autoplay" v-if='index=4'>
          <source :src="item.src" type="video/mp4" />
        </video>-->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderItem: [
        // {
        //   src: require("../assets/upload/41.jpg")
        // },
        // {
        //   src: require("../assets/upload/01.jpg")
        // },
        // {
        //   src: require("../assets/upload/34.jpg")
        // },
        // {
        //   src: require("../assets/upload/36.jpg")
        // }
        // {
        //   src: require("../assets/upload/home-hero-1.mp4")
        // }
      ]
    };
  }
};
</script>

<style lang='scss'>
.el-carousel__item {
  color: #475669;
  font-size: 0.18rem;
  opacity: 0.75;
  line-height: 5rem;
  margin: 0;
  video {
    width: 100%;
    height: 100%;
  }
}
.el-carousel__container {
  button {
    height: 0.8rem;
    width: 0.8rem;
    i {
      font-size: 0.7rem;
    }
  }
}
 
</style>