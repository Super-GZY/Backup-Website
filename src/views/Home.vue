<template>
  <div class="home">
    <!-- <Slider /> -->
    <div class="home_bg">
      <!-- <img src="../assets/upload/01.jpg" alt=""> -->
    </div>
    <div class="about">
      <div class="title">
        <h1>关于我们</h1>
      </div>
      <div class="text">
        <!-- <p>邦纬科技定位服务于科技产业实践，在产业链商品溯源、产业金融、智慧城市和公共服务等应用场景有深入的研究和探索，先后实现了区块链+溯源、区块链+供应链金融、区块链+新零售、区块链+智慧物流、区块链+航运等项目的落地，始终致力于融合区块链、云计算、大数据以及人工智能等技术，为国内、国际用户提供应用场景落地服务。</p>
        <p>邦纬科技是一站式企业级区块链技术平台及行业解决方案提供商，是专注于区块链应用场景落地的一流高科技公司。</p> -->
        <p>北京一大波网络科技有限公司旗下“一大波”是年轻人的生活方式平台，关注独特设计之美的产品，为设计师提供展示的舞台，内容覆盖时尚、旅行、娱乐、读书、健身等各个生活方式领域，用户可以通过短视频、图文等形式记录生活点滴，分享生活方式，并基于兴趣形成互动。</p>
        
      </div>
    </div>
     <div class="about" style="flex-direction: row;">
      <div class="title">
        <h1>公司环境</h1>
      </div>
      <div class="text" style="width:60%;display:flex;justify-content:space-around">
        <img src="../assets/upload/env1.png" alt="" style="width:2.5rem;">
        <img src="../assets/upload/env2.png" alt="" style="width:2.5rem;">
        <img src="../assets/upload/env3.png" alt="" style="width:2.5rem;">
      </div>
    </div>
    <!-- <div class="partner">
      <h1>合作伙伴</h1>
      <PartnerCard />
      <div style="height:0.5rem"></div>
    </div> -->
  </div>
</template>

<script>
import Slider from "../components/Slider";
import PartnerCard from "../components/PartnerCard";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Slider,
    PartnerCard
  }
};
</script>

<style lang="scss" scoped>
.home {
  .home_bg{
      height: 6rem;
      width: 100%;
      background:url('../assets/upload/34.jpg') ;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 10% 40%
  }
  .about {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .title {
      color: #172a88;
    }
    .text {
      width: 52%;
      font: 400 0.18rem/1.7 "proxima-nova", sans-serif;
      color: #525f5d;
    }
  }

  .partner {
    // height: 5.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #172a88;
    }
  }
}

@media screen and(max-width: 768px) {
  .home {
    .about {
      flex-direction: column;
      .text {
        width: 90%;
        font: 400 0.18rem/1.7 "proxima-nova", sans-serif;
      }
    }
  }
}

@media screen and(min-width: 768px) {
  .about {
    height: 3rem;
    .text {
      width: 40%;
    }
  }
}
</style>
