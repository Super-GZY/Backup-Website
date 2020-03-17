<template>
  <div class="home">
    <Slider />
    <div class="about">
      <div class="title">
        <h1>关于我们</h1>
      </div>
      <div class="text">
        <p>邦纬科技定位服务于科技产业实践，在产业链商品溯源、产业金融、智慧城市和公共服务等应用场景有深入的研究和探索，先后实现了区块链+溯源、区块链+供应链金融、区块链+新零售、区块链+智慧物流、区块链+航运等项目的落地，始终致力于融合区块链、云计算、大数据以及人工智能等技术，为国内、国际用户提供应用场景落地服务。</p>
        <p>邦纬科技是一站式企业级区块链技术平台及行业解决方案提供商，是专注于区块链应用场景落地的一流高科技公司。</p>
      </div>
    </div>
    <div class="partner">
      <h1>合作伙伴</h1>
      <PartnerCard />
      <div style="height:0.5rem"></div>
    </div>
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
  .about {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .title {
      color: #172a88;
    }
    .text {
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
