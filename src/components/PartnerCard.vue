<template>
  <div class="logo_partner">
    <div v-for="(item,index) in logoItem" :key="index">
      <el-card shadow="hover">
        <a href>
          <img :src="item.src" alt />
        </a>
      </el-card>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      logoItem: [
        {
          src: require("../assets/i/19.png")
        },
        {
          src: require("../assets/i/20.png")
        },
        {
          src: require("../assets/i/21.png")
        },
        {
          src: require("../assets/i/22.png")
        },
        {
          src: require("../assets/i/24.png")
        },
        {
          src: require("../assets/i/27.png")
        },
        {
          src: require("../assets/i/29.png")
        },
        {
          src: require("../assets/i/30.png")
        },
        {
          src: require("../assets/i/31.png")
        },
        {
          src: require("../assets/i/37.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.logo_partner {
  display: flex;
  flex-wrap: wrap;
  width: 76%;
  .el-card {
    margin-top: 0.1rem;
    margin-left: 0.07rem;
  }
  img {
    height: 0.85rem;
    width: 2.7rem;
  }
}

@media screen and(max-width: 768px){
  .partner {
    .logo_partner {
      justify-content: center;

    //   width: 100%;
    }
  }
}
</style>