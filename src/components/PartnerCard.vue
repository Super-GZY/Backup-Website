<template>
  <div class="logo_partner">
    <div v-for="(item,index) in logoItem" :key="index">
      <el-card shadow="hover">
        <a :href='item.url' target="blank">
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
          src: require("../assets/i/19.png"),
          url:'https://www.linuxfoundation.org/'
        },
        {
          src: require("../assets/i/20.png"),
          url:'https://www.hyperledger.org/'
        },
        {
          src: require("../assets/i/30.png"),
          url:'http://www.pkusp.com.cn'
        },
        {
          src: require("../assets/i/31.jpg"),
          url:'https://amazonaws-china.com'
        },
        {
          src: require("../assets/i/37.png"),
          url:'https://cloud.digitalocean.com/'
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
  width: 80%;
  .el-card {
    margin-top: 0.1rem;
    margin-left: 0.07rem;
  }
  img {
    height: 0.75rem;
    width: 2.8rem;
  }
}

@media screen and(max-width: 768px){
  .partner {
    .logo_partner {
      // justify-content: center;

    //   width: 100%;
    }
  }
}
</style>