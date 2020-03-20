<template>
  <div class="about">
    <Picture title="加入我们" :bakImg="bakImg">
      <div class="slogan">
        <h2 style="font-size: 0.5rem;">携手邦纬科技, 共赢未来!</h2>
        <span style="font-size: 0.35rem;">发送邮件至: wangyijia_hi@126.com</span>
      </div>
    </Picture>
    <div class="job">
      <div class="out">
        <div class="content" v-for="(item,index) in jobItems" :key="index">
          <!-- <img :src="item.src" alt v-if="index%2==0" class="pc"/> -->
          <!-- <img :src="item.src" alt class="mobile"/> -->
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
            <!-- <a href>
              <span>联系我们</span>
            </a> -->
          </div>
          <!-- <img :src="item.src" alt v-if="index%2!==0" class="pc" /> -->
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
          title: "算法工程师",
          subtitle1: "岗位职责：",
          subtitle2: "职位要求：",
          // src: require("../assets/upload/23.png"),
          content1: [
            {
              detail: "开发区块链应用平台"
            },
            {
              detail: "集成测试和单元测试 "
            }
          ],
          content2: [
            {
              detail: "对前沿技术有兴趣和热情"
            },
            {
              detail: "具备良好的沟通技巧，思维敏锐"
            },
            {
              detail: "对算法和数据结构有深刻的理解，有良好的编程习惯"
            },
            {
              detail: "熟练掌握编程语言，如Java，Python或C/C++，有使用Linux环境的经验"
            },
            {
              detail: "有全栈开发经验者优先"
            },
            {
              detail: "985或211大学计算机，数学，电子，自动化本科及以上学位优先"
            }
          ]
        },
        {
          title: "市场专员",
          subtitle1: "岗位职责：",
          subtitle2: "职位要求：",
          // src: require("../assets/upload/24.png"),
          content1: [
            {
              detail: "撰写整理公众号微博等社交媒体账号文章，完成选题策划实施等工作"
            },
            {
              detail: "社交账号、新媒体、媒体文章内容撰写、制作、发布"
            },
            {
              detail: "紧跟热点，搜集相关资料，进行内容编辑撰写"
            },
            {
              detail: "线上线下活动的策划、开展、跟进"
            }
          ],
          content2: [
            {
              detail: "本科及以上学历，市场营销相关经验优先"
            },
            {
              detail: "一年以上市场营销文案工作经验优先"
            },
            {
              detail: "有优秀的活动创意策划能力"
            },
            {
              detail: "热爱写作，有较强的文字功底"
            },
            {
              detail:
                "有区块链行业从业经验，对区块链感兴趣者优先"
            },
            {
              detail: "对前沿技术有兴趣和热情，善于学习，具有良好的分析和解决问题的能力，能快速理解业务和技术"
            },
            {
              detail: "有良好的团队配合意识，良好的沟通能力、团队合作精神、能承担工作压力"
            },
            {
              detail: "英文能力良好"
            },
            {
              detail: "工作时间灵活，可以及时和海外团队沟通"
            }
          ]
        },
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
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
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
      display: inline;
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