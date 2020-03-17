<template>
  <div class="contact">
    <h1>携手邦纬科技 共赢未来</h1>
    <!-- <div class="content"> -->
    <p><strong>投资合作</strong>: zhengjiong@chainnova.com <strong>联系我们</strong>: 15010989282 </p>
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
}

@media screen and(max-width: 768px) {
  .contact {
    height: 4rem;
    h1 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.4rem;
      text-align: center;
      width: 69%;
    }
  }
}
</style>