<template>
  <div class="about">
    <Picture title="关于我们" subtitle="" slogan="" :bakImg="bakImg" >
       <div class="slogan">
        <h2>途科科技</h2>
        <span style="font-size: 0.5rem;">从万物互联到万物智能</span>
      </div>
    </Picture>
    <div class="description">
      <p>途科科技定位服务于科技产业实践，在产业链商品溯源、产业金融、智慧城市和公共服务等应用场景有深入的研究和探索，先后实现了区块链+溯源、区块链+供应链金融、区块链+新零售、区块链+智慧物流、区块链+航运等项目的落地，始终致力于融合区块链、云计算、大数据以及人工智能等技术，为国内、国际用户提供应用场景落地服务。</p>
      <p>途科科技是一站式企业级区块链技术平台及行业解决方案提供商，是专注于区块链应用场景落地的一流高科技公司。</p>
    </div>
    <div class="manager">
      <div class="title">
        <h1>管理团队</h1>
        <span>途科科技团队核心人员来自于IBM、百度等大型科技互联网公司和系统安全公司，掌握大型网络分布式系统的核心技术，分别负责区块链、云计算相关技术研究、行业应用商业化开发，以及各领域业务拓展。</span>
      </div>
      <div class="member">
        <div v-for="(item,index) in managerItem" :key="index" class="content">
          <img :src="item.src" alt />
          <span class="name">{{item.name}}</span>
          <span class="position">{{item.position}}</span>
          <span class="details">{{item.details}}</span>
        </div>
      </div>
      <div style="height:0.5rem"></div>
    </div>
    <div class="pic_wall">
      <div class="content">
        <div v-for="(item,index) in picItem" :key="index">
          <img :src="item.src" alt />
        </div>
      </div>
      <div style="height:5rem"></div>
    </div>
  </div>
</template>
<script>
import Picture from "../components/Picture";
export default {
  data() {
    return {
      managerItem: [
        {
          src: require("../assets/upload/tlimg1.jpg"),
          name: "董宁",
          position: "途科科技 CEO",
          details:
            "北京大学新一代信息技术研究院金融科技研究中心主任，途科科技（北京）数字科技有限公司CEO，工信部信通院“可信区块链”联盟副理事长，国际电联（ITU）分布式账本技术焦点组Champion，Hyperledger超级账本技术大使。曾任IBM中国实验室区块链业务负责人，IBMBlockchain中国社区发起人"
        },
        {
          src: require("../assets/upload/tlimg2.jpg"),
          name: "谢文杰",
          position: "途科科技 CTO",
          details:
            "原金山云产品总监，原百度移动事业部技术主管、百度移动战略参与者。IBM外部技术Champion，CSDN特聘专家。毕业于南京邮电大学计算机系，十余年大型软件技术架构经验，擅长高性能高可用服务设计，对云计算、移动APP、手游、社交、P2P网络等多种类型产品的开发运营均有深度研究。从14年开始研究区块链，对众多主流区块链技术平台均有深入研究，专注于区块链技术在海量数据以及高性能、高可用软件体系内的应用实践。"
        }
      ],
      picItem: [
        {
          src: require("../assets/upload/37.jpg")
        },
        {
          src: require("../assets/upload/39.jpg")
        },
        {
          src: require("../assets/upload/40.jpg")
        },
        {
          src: require("../assets/upload/44.jpg")
        },
        {
          src: require("../assets/upload/47.png")
        },
        {
          src: require("../assets/upload/49.jpg")
        },
        {
          src: require("../assets/upload/16.jpg")
        }
      ],
      bakImg: require("../assets/upload/about-bg.jpg")
    };
  },
  components: {
    Picture
  }
};
</script>

<style lang="scss" scoped>
.description {
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    width: 60%;
    // height: 2rem;
    font: 400 18px/1.7 "proxima-nova", sans-serif;
    color: #525f5d;
  }
}

.manager {
  width: 100%;
  // height: 7rem;
  background-color: #1c2335;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    text-align: center;
    width: 50%;
    h1 {
      color: white;
    }
    span {
      color: #525f5d;
    }
  }

  .member {
    width: 70%;
    // height: 4rem;
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .content {
      width: 40%;
      display: flex;
      flex-direction: column;
      // justify-content: space-around;
      align-items: center;
      img {
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
      }
      .name {
        color: white;
        margin-top: 0.3rem;
      }
      .position {
        color: #7b86bb !important;
        margin-top: 0.2rem;
      }
      .details {
        color: #7b86bb !important;
        margin-top: 0.2rem;
      }
    }
  }
}

.pic_wall {
  width: 100%;
  // height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 70%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    img {
      width: 2.5rem;
      height: 1.5rem;
      margin-top: 0.3rem;
    }
  }
}
@media screen and(max-width: 768px) {
  .description {
    height: 7rem;
    p {
      width: 90%;
      font: 400 0.18rem/1.7 "proxima-nova", sans-serif;
    }
  }
  .manager {
    height: 100%;
    .title {
      width: 90%;
      span {
        font: 400 0.35rem/1.7 "proxima-nova", sans-serif;
      }
    }
    .member {
      width: 80%;
      .content {
        width: 100%;
        margin-top: 1rem;
        img {
          width: 2rem;
          height: 2rem;
        }
        .details {
          font: 400 0.35rem/1.7 "proxima-nova", sans-serif;
        }
      }
    }
  }
  .pic_wall {
    .content {
       width: 90%;
      flex-direction: column;
      img {
        width: 100%;
        height: 100%
      }
    }
  }
}
</style>