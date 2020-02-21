<template>
  <div class="footer">
    <div class="detail">
      <span>
        北京市东城区北三环东路
        36号环球贸易中心B座17层
      </span>
      <span>
        联系电话:<br/>
        18614067758<br/>
        010-59575758
      </span>
    </div>
    <div class="Catalog">
      <div class="content" v-for="(item,index) in menuItem" :key="index">
        <router-link :to="item.path">{{item.name}}</router-link>
      </div>
    </div>
    <div class="qrCode">
      <img src="../assets/i/26.jpg" alt />
    </div>
    <div class="bak">
      <span>途科科技 © 2019京ICP备17029815号</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItem: [
        {
          path: "/",
          name: "首页"
        },
        {
          path: "/about",
          name: "关于我们"
        },
        {
          path: "/solution",
          name: "解决方案"
        },
        {
          path: "/partner",
          name: "合作伙伴"
        },
        {
          path: "/join",
          name: "加入我们"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
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
    justify-content: space-around;
    align-items: flex-start;
    color: #7b86bb !important;
  }
  .Catalog {
    width: 23.3%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    a {
      color: #7b86bb !important;
    }
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
  .bak{
    span{
        color: #434b71
    }
  }
}

@media screen and(max-width: 768px){
    .footer{
        height: 6rem;
        font-size: 0.4rem;
        .Catalog{
            display: none
        }
    }
}
</style>