<template>
  <div class="footer">
    <!-- <div class="detail">
      <a
        target="blank"
        href="https://map.baidu.com/poi/%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%A7%91%E6%8A%80%E5%9B%AD/@12948940.444410011,4840488.562085818,19.44z?uid=18df172ff7057ceea8f729c3&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&querytype=detailConInfo&da_src=shareurl"
      >
        <span>地址：北京市海淀区北京大学科技园127-1</span>
      </a>
      <div style="width:3.3rem;height:1.8rem;border:#ccc solid 1px;" id="dituContent"></div>
    </div> -->
    <div class="Catalog">
      <div class="content" v-for="(item,index) in menuItem" :key="index">
        <router-link :to="item.path">{{item.name}}</router-link>
      </div>
    </div>
    <!-- <div class="qrCode">
      <img src="../assets/i/26.jpg" alt />
    </div>-->
    <!-- <div class="backTop" @click="backtop">
      <img src="../assets/i/rocket.png" alt />
      <span>回到顶部</span>
    </div> -->
    <div class="bak">
      <span>北京一大波网络科技有限公司</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItem: [
        // {
        //   path: "/",
        //   name: "首页"
        // },
        // {
        //   path: "/about",
        //   name: "关于我们"
        // },
        // {
        //   path: "/solution",
        //   name: "解决方案"
        // },
        // {
        //   path: "/partner",
        //   name: "合作伙伴"
        // },
        // {
        //   path: "/join",
        //   name: "加入我们"
        // }
      ]
    };
  },
  methods: {
    backtop() {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>


<style lang="scss" scoped>
a {
  color: #7b86bb !important;
}
.footer {
  height: 3rem;
  background-color: #1c2335;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .detail {
    width: 33.3%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #7b86bb !important;
    font-size: 0.17rem
  }
  .Catalog {
    width: 23.3%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .qrCode {
    width: 33.3%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  .backTop {
    width: 33.3%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      margin-top: 0.1rem;
      color: #fff !important;
    }
    // img {
    //   width: 2rem;
    //   height: 2rem;
    // }
  }
  .bak {
    span {
      color: #434b71;
    }
  }
}

@media screen and(max-width: 768px) {
  .footer {
    height: 6rem;
    font-size: 0.4rem;
    .Catalog {
      display: none;
    }
    .detail {
     justify-content: center;
      #dituContent {
        display: none;
      }
    }
  }
}
</style>