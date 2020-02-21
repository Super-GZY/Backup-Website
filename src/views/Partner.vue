<template>
  <div class="partner">
    <Picture title="合作伙伴" :bakImg="bakImg" class="pic">
      <div class="slogan">
        <h2>携手共赢未来</h2>
        <span class="slogan_span" style="font-size: 0.4rem;">与途科科技共同构建开源生态</span>
      </div>
    </Picture>
    <div class="welcome">
      <div class="out">
        <div class="content" v-for="(item,index) in welItems" :key="index">
          <h1>{{item.title}}</h1>
          <span v-for="(value,index) in item.content" :key="index">{{value.tag}}</span>
        </div>
      </div>
      <div style="height:4rem"></div>
    </div>
    <div class="card">
      <PartnerCard />
      <div style="height:0.5rem"></div>
    </div>
  </div>
</template>

<script>
import Picture from "../components/Picture";
import PartnerCard from "../components/PartnerCard";
export default {
  data() {
    return {
      bakImg: require("../assets/upload/partner.jpg"),
      welItems: [
        {
          title: "我们欢迎",
          content: [
            {
              tag: "行业先驱企业"
            },
            {
              tag: "研究院所"
            },
            {
              tag: "高等院校"
            },
            {
              tag: "双创孵化器"
            }
          ]
        },
        {
          title: "我们拥有",
          content: [
            {
              tag: "领先的行业解决方案"
            },
            {
              tag: "丰富的生态合作资源"
            },
            {
              tag: "深入的技术培训"
            }
          ]
        },
        {
          title: "与您一起",
          content: [
            {
              tag: "打造企业级区块链解决方案"
            },
            {
              tag: "帮助企业创新商业模式"
            },
            {
              tag: "推动生态产业链的发展"
            }
          ]
        }
      ]
    };
  },
  components: {
    Picture,
    PartnerCard
  }
};
</script>


<style lang="scss" >
.welcome {
  width: 100%;
  // height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .out {
    width: 70%;
    display: flex;
    justify-content: space-around;
    .content {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 0.35rem;
        color: #1c2335;
        font-weight: 300;
      }
      span {
        font-size: 0.15rem;
        color: #525f5d;
        line-height: 0.3rem;
        font-weight: 200;
      }
    }
  }
}

.card {
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media screen and(max-width: 768px) {


  .welcome {
    // height: 4rem;
    .out {
      flex-direction: column;
      align-items: flex-start;
      // width: 50%;
      .content {
        h1 {
          font-size: 0.7rem;
        }
        span {
          line-height: 0.6rem;
          font-size: 0.4rem;
        }
      }
    }
  }
  .card {
    margin-top: 1rem;
  }
}
</style>