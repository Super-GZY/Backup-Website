<template>
  <div class="contact">
    <h1>携手我们 共赢未来！</h1>
    <span>北京一大波网络科技有限公司</span>
      <a href="https://api.kuaidi100.com/" style="color:#fff">快递100</a>

    <!-- <div class="content"> -->
    <!-- <p><strong>投资合作</strong>: bitvee@outlook.com <strong>联系邮箱</strong>: wangyijia_hi@126.com</p> -->
    <!-- </div> -->
  </div>
</template>


<style lang='scss' scoped>
.contact {
  background: url("../assets/upload/22.jpg");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  height: 2rem;
  h1 {
    font-size: 0.4rem;
  }
  p{
    font-size: 0.2rem
  }
}

@media screen and(max-width: 768px) {
  .contact {
    height: 6rem;
    h1 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.4rem;
      text-align: center;
      width: 56%;
    }
  }
}
</style>