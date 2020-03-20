<template>
  <div class="join">
    <el-tabs tab-position="left" :stretch="true">
      <el-tab-pane v-for="(item,index) in tabItems" :key="index">
        <div class="title" slot="label">
          <h1>{{index+1}}</h1>
          <h2>{{item.title}}</h2>
        </div>
        <div
          class="content"
          :style="{background: 'url('+item.src+')',backgroundPosition:'50%',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',filter: 'blur(0.05rem)'}"
        ></div>
        <div class="detail">
          <p v-for="(value,index) in item.content" :key="index">{{value.detail}}</p>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="mobile_content">
      <div class="out" v-for="(item,index) in tabItems" :key="index">
        <div
          class="mobile_title"
          :style="{background: 'url('+item.src+')',backgroundPosition:'50%',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}"
        >
          <h1>{{index+1}}</h1>
          <h2>{{item.title}}</h2>
        </div>
        <div class="mobile_detail">
          <p v-for="(value,index) in item.content" :key="index">{{value.detail}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabItems: [
        {
          title: "FinTech金融行业解决方案",
          src: require("../assets/upload/bit.jpg"),
          content: [
            {
              detail:
                "基于区块链技术的“债权融资计划”平台，使每一个平台参与方都具有一个共享的帐本，当交易发生时，通过点对点传输复制技术来更改所有账本。"
            },
            {
              detail:
                "使用密码算法确保参与者仅可以看到和他们相关的账本内容，交易是安全的、授权的和验证的。"
            },
            {
              detail: "平台的信息披露满足相关部门的监管、合规及审计要求。"
            }
          ]
        },
        {
          title: "供应链（商品）追踪溯源行业解决方案",
          src: require("../assets/upload/17.jpg"),
          content: [
            {
              detail:
                "中国政府高度重视食品安全问题，作为促进食品安全的举措之一，将食品认证、供应链跟踪作为保障食品安全的重要举措，以此快速发现和消除食品的污染源。"
            },
            {
              detail:
                "和北大荒合作，建立基于区块链的商品流通平台和粮食产业链（放心粮，安全奶，优质肉）"
            },
            {
              detail:
                "区块链技术将实现食品的全程数字化跟踪，从供应商生态系统到商店货架，最终到消费者。对于食品供应商而言，数字产品信息－诸如农场原产地信息、批号、工厂和加工数据、有效期、存储温度和运输等都将与相应的食品建立数字化关联，而整个过程中每一环节的信息将被输入到区块链中，确保相关信息都准确无误。"
            }
          ]
        },
        {
          title: "企业外部成本交易平台解决方案",
          src: require("../assets/upload/19.jpg"),
          content: [
            {
              detail:
                "污染治理是政府部门面临的一大挑战。目前主要有三种方法：税收、排污费、可交易许可证。"
            },
            {
              detail:
                "区块链技术具有公平、透明、不可逆的特点，能更好推动许可证交易市场化"
            },
            {
              detail:
                "典型应用场景是政府官员登录平台，查看本市范围绿色资本状况，看到资产项和负债项的分别统计。"
            }
          ]
        },
        {
          title: "IP信息公证、知识产权交易解决方案",
          src: require("../assets/upload/20.jpg"),
          content: [
            {
              detail:
                "基于区块链的文档公证系统软件利用Hyperledger的区块链技术对文件进行公证。"
            },
            {
              detail:
                "签名者用自己的证书对文件进行签名，提交到区块链上，验证成功并达成共识后的签名信息保存在区块链上。"
            },
            {
              detail:
                "任何提交到区块链上并达成共识的信息是无法进行删除和修改的，达到公示和公证的目的。"
            },
            {
              detail:
                "确定是否公证的信息就是验证签名的过程，把签名过的信息和对应的文件上传到系统上，系统作为第三方验证签名信息。"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" >
.el-tabs {
  .el-tabs__item {
    height: 1.94rem;
  }
  .title {
    h1 {
      text-align: center;
    }
    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 0.18rem;
    }
  }
  .title:hover {
    color: #409eff;
  }
  .content {
    height: 8.51rem;
  }
  .detail {
    position: absolute;
    top: 30%;
    left: 25%;
    width: 50%;
    color: #f5f5f5;
    font-size: 0.2rem;
    p {
      line-height: 0.4rem;
    }
  }
}
.mobile_content {
  display: none;
}

@media screen and(max-width: 768px) {
  .el-tabs {
    display: none;
  }
  .mobile_content {
    display: inline;
    .out {
      .mobile_title {
        height: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h1{
          color: #f5f5f5;
          font-size: 1rem;
        }
        h2 {
          color: #f5f5f5;
          font-weight: 300;
        }
      }
      .mobile_detail{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        p{
          width: 80%;
          color: #525f5d;
        }
      }
    }
  }
}
</style>