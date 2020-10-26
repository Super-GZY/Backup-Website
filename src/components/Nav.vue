<template>
  <div class="nav">
    <div class="slogon">
      <img src="../assets/i/logo.png" alt />
      <span>分享好物设计，从喜藩开始！</span>
    </div>
    <!-- <router-link to="/">
      <img src="../assets/i/logo_n.png" class="logo_nav" />
    </router-link>
    <el-dropdown @command='menu' placement='bottom' trigger="click">
      <img src="../assets/i/menu.png" class="menu" alt />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="/home">首页</el-dropdown-item>
        <el-dropdown-item command="/about">关于我们</el-dropdown-item>
        <el-dropdown-item command="/solution">解决方案</el-dropdown-item>
        <el-dropdown-item command="/partner">合作伙伴</el-dropdown-item>
        <el-dropdown-item command="/join">加入我们</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-menu
      :default-active="$route.path"
      class="el-menu-nav"
      mode="horizontal"
      router
      style="border: none;"
      active-text-color="#172a88"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>
      <el-menu-item index="/solution">解决方案</el-menu-item>
      <el-menu-item index="/partner">合作伙伴</el-menu-item>
      <el-menu-item index="/join">加入我们</el-menu-item>
    </el-menu>-->
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    menu(value) {
      this.$router.push(value);
    }
  }
};
</script>

<style lang='scss' >
.slogon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  img {
    width: 0.5rem;
    height: 0.5rem;
  }
}
a {
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.01rem solid rgba(241, 89, 42, 0.1);
  height: 0.9rem;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
  .logo_nav {
    width: 2rem;
    height: 0.7rem;
    // border: 1px solid red
  }
  .menu {
    width: 1rem;
    height: 1rem;
    display: none;
  }
}
@media screen and(max-width:768px) {
  .el-menu-nav {
    display: none;
  }
  .nav {
    height: 1.8rem;
    .menu {
      display: inline;
    }
    .logo_nav {
      width: 3rem;
      height: 1rem;
    }
  }
}
</style>
