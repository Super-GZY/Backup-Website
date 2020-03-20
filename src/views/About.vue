<template>
  <div class="about">
    <Picture title="关于我们" subtitle="" slogan="" :bakImg="bakImg" >
       <div class="slogan">
        <h2>邦纬科技</h2>
        <span style="font-size: 0.5rem;">从万物互联到万物智能</span>
      </div>
    </Picture>
    <div class="description">
      <p>邦纬科技定位服务于科技产业实践，在产业链商品溯源、产业金融、智慧城市和公共服务等应用场景有深入的研究和探索，先后实现了区块链+溯源、区块链+供应链金融、区块链+新零售、区块链+智慧物流、区块链+航运等项目的落地，始终致力于融合区块链、云计算、大数据以及人工智能等技术，为国内、国际用户提供应用场景落地服务。</p>
      <p>邦纬科技是一站式企业级区块链技术平台及行业解决方案提供商，是专注于区块链应用场景落地的一流高科技公司。</p>
    </div>
    <div class="manager">
      <div class="title">
        <h1>管理团队</h1>
        <span>邦纬科技团队核心人员在区块链和数字资产耕耘多年，富有经验，掌握大型网络分布式系统的核心技术，分别负责区块链、云计算相关技术研究、行业应用商业化开发，以及各领域业务拓展。</span>
      </div>
      <div class="member">
        <div v-for="(item,index) in managerItem" :key="index" class="content">
          <!-- <img :src="item.src" alt /> -->
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
          // src: require("../assets/upload/tlimg1.jpg"),
          name: "Sunny King",
          position: "首席顾问",
          details:
            "区块技术的奠基人之一,被称为继中本聪之后区块链技术最具创新⼒的开发者之一，权益证明(Proof-of-State, PoS)共识机制之父；提供了最有突破性和原创性的共 识算法。2012年开发了第⼀条公链点点币（Peercoin），为⼈类开启了PoS共识的 ⼤门。2013年发布了 第⼆条链质数链(Primecoin)，使PoW在⽐特币的 基础上变得真正有意义，2019年发布了 VSYS(第⼀个SPOS共识)，将提供 更具操作性的数据库功能。Sunny King曾开创了全球市值前十的点点币和质数币，被全球区块链社区 与Vitalik Buterin和Daniel Larimer并称为区块链技术三大教主。"
        },
        {
          // src: require("../assets/upload/tlimg2.jpg"),
          name: "单华",
          position: "CEO",
          details:
            "北京邮电大学计算机本科，芝加哥大学计算机硕士。曾任 Oracle 主任工程师，埃森哲高级咨询师等。从事区块链架构开发多年，曾参与多个基于POW和POS协议的公链技术开发 "
        },
        {
          // src: require("../assets/upload/tlimg2.jpg"),
          name: "海那尔",
          position: "区块链应用核心开发人员",
          details:
            "北京大学信科系"
        }
      ],
      picItem: [
        {
          src: require("../assets/upload/37.jpg")
        },
        {
          src: require("../assets/upload/47.png")
        },
        {
          src: require("../assets/upload/39.jpg")
        },
      ],
      bakImg: require("../assets/upload/about.jpg")
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
    width: 50%;
    h1 {
      color: white;
      text-align: center;
    }
    span {
      color: #525f5d;
      display:block;
      text-indent:2em
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
      width: 30%;
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
        text-indent: 2em;
        letter-spacing: 0.01rem
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
      width: 3rem;
      height: 2rem;
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