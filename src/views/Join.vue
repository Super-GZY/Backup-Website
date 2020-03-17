<template>
  <div class="about">
    <Picture title="加入我们" :bakImg="bakImg">
      <div class="slogan">
        <h2 style="font-size: 0.5rem;">携手邦纬科技, 共赢未来!</h2>
        <span style="font-size: 0.35rem;">发送邮件至: jessie@chainnova.com</span>
      </div>
    </Picture>
    <div class="job">
      <div class="out">
        <div class="content" v-for="(item,index) in jobItems" :key="index">
          <img :src="item.src" alt v-if="index%2==0" class="pc"/>
          <img :src="item.src" alt class="mobile"/>
          <div class="detail">
            <h1>{{item.title}}</h1>
            <h2>{{item.subtitle1}}</h2>
            <ul>
              <li v-for="(value,index) in item.content1" :key="index">
                <span>{{value.detail}}</span>
              </li>
            </ul>
            <h2>{{item.subtitle2}}</h2>
            <ul>
              <li v-for="(value,index) in item.content2" :key="index">
                <span>{{value.detail}}</span>
              </li>
            </ul>
            <a href>
              <span>联系我们</span>
            </a>
          </div>
          <img :src="item.src" alt v-if="index%2!==0" class="pc" />
        </div>
        <div style="height:0.5rem"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Picture from "../components/Picture";

export default {
  data() {
    return {
      bakImg: require("../assets/upload/join_top.jpg"),
      jobItems: [
        {
          title: "高级架构师",
          subtitle1: "岗位职责：",
          subtitle2: "职位要求：",
          src: require("../assets/upload/23.png"),
          content1: [
            {
              detail: "基于区块链的技术平台系统设计"
            },
            {
              detail: "对外技术输出"
            },
            {
              detail: "主流区块链技术研究及转化"
            },
            {
              detail: "HyperLedger中国工作组相关工作"
            }
          ],
          content2: [
            {
              detail: "本科及五年以上研发经验"
            },
            {
              detail: "扎实的基本功，如算法、网络、软件工程、数据结构等"
            },
            {
              detail: "熟悉分布式计算、大数据分析、高可用集群等技术架构"
            },
            {
              detail: "拥有大型项目设计经验"
            },
            {
              detail: "熟悉去中心化设计，分布式账本技术等优先"
            },
            {
              detail: "思路清晰，具备良好的团队凝聚能力"
            }
          ]
        },
        {
          title: "高级研发工程师",
          subtitle1: "岗位职责：",
          subtitle2: "职位要求：",
          src: require("../assets/upload/24.png"),
          content1: [
            {
              detail: "基于区块链的项目平台相关功能进行研发，保证代码质量"
            },
            {
              detail: "HyperLedger中国工作组相关工作"
            },
            {
              detail: "对外提供API设计开发"
            },
            {
              detail: "负责性能优化、安全升级"
            },
            {
              detail: "结合实际应用需求进行技术的改进与创新"
            }
          ],
          content2: [
            {
              detail: "本科及三年以上研发经验"
            },
            {
              detail: "扎实的基本功，如算法、网络、软件工程、数据结构等"
            },
            {
              detail: "C/C++基础良好，Go/Python/Java等语言精通其一"
            },
            {
              detail: "熟悉HTTP原理及SQL，熟悉Unix/Linux 环境；"
            },
            {
              detail:
                "有一定的软件工程基础，能够写清晰的代码，对代码质量有极高的追求；"
            },
            {
              detail: "对新技术充满好奇心；对良好代码风格具有强迫症"
            },
            {
              detail: "熟悉分布式计算、大数据分析、高可用集群等优先"
            },
            {
              detail: "有大数据处理经验优先"
            },
            {
              detail: "熟悉去中心化设计、分布式账本技术等优先"
            },
            {
              detail: "思路清晰，具备良好的团队协作能力，乐于分享"
            }
          ]
        },
        {
          title: "商务BD",
          subtitle1: "岗位职责：",
          subtitle2: "职位要求：",
          src: require("../assets/upload/27.png"),
          content1: [
            {
              detail: "建立和维系公司重要客户及合作伙伴的关系"
            },
            {
              detail: "协助处理对外商务、公共关系；负责商务活动的接洽安排"
            },
            {
              detail:
                "敏锐捕捉市场信息，结合公司资源，协助优化市场合作进程，推动合作达成"
            },
            {
              detail: "建立有效的市场渠道，开拓和创新商务合作机会"
            },
            {
              detail: "协助制定项目招投标方案，招投标资料的准备整理及标书制作"
            },
            {
              detail: "完成总经理安排的其他工作"
            }
          ],
          content2: [
            {
              detail: "本科及以上学历，年龄25—30岁"
            },
            {
              detail: "3年以上销售或市场岗位工作经验；了解招投标流程"
            },
            {
              detail: "熟悉商务接待流程，并能适应短期外地出差"
            },
            {
              detail:
                "有较强的组织、协调、人际交往能力及敏锐的洞察力，具备极强的执行力"
            }
          ]
        }
      ]
    };
  },
  components: {
    Picture
  }
};
</script>

<style lang="scss" scoped>
.job {
  width: 100%;
  display: flex;
  justify-content: center;
  .out {
    width: 70%;
    .content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .detail {
        width: 50%;
        margin-top: 0.5rem;
        h1 {
          font-weight: 400;
        }
        h2 {
          font-weight: 300;
          color: #525f5d;
        }
        li {
          font-size: 0.16rem;
          color: #b5bee8;
          list-style-type: circle;
          span {
            color: #525f5d;
            font-weight: 200;
          }
        }
        a {
          color: #324396;
        }
      }
      img {
        width: 2.5rem;
        height: 2.5rem;
      }
      .mobile{
        display: none
      }
    }
  }
}
@media screen and(max-width: 768px) {
  .job {
    .out {
      width: 90%;
      .content {
        //  align-items: flex-start;
        margin-top: 0.5rem;
        flex-direction: column;
        .detail{
          width: 100%;
          h1{
            text-align: center
          }
          li{
            span{
              font-size: 0.4rem;
            }
          }
        }
        img {
          width: 4rem;
          height: 4rem;
        }
        .pc{
          display: none
        }
        .mobile{
        display: inline
      }
      }
    }
  }
}
</style>