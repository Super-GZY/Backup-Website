<template>
  <div
    class="pic"
    :style="{background: 'url('+bakImg+')',backgroundPosition:'50%',backgroundRepeat: 'no-repeat',backgroundSize: '100%'}"
  >
    <div class="text">
      <h1>{{title}}</h1>
    </div>
    <slot/>
    
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    bakImg: String
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.pic {
    // border: 
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  .text {
    h1 {
      color: #fff;
    }
  }
  .slogan {
    width: 40%;
    height: 30%;
    border: 1px solid white;
    color: #fff;
    margin-bottom: 10%;
    h2 {
      margin:0;
      margin-top: 0.35rem;
      font-size: 0.4rem;
      font-weight: 400;
      margin-left: 5%;
    }
    span {
      font-size: 0.3rem;
      font-weight: 100;
      margin-left: 10%;
    }
  }
}
@media screen and(max-width: 768px) {
    .pic{
        height: 5.4rem;
        .slogan{
            width: 80%;
            height: 40%;
            h2{
                font-size: 0.8rem
            }
            span{
                font-size: 0.6rem
            }
        }
    }
}

</style>