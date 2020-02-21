<template>
  <div class="app">
    <Nav />
    <router-view class="main" />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default {
  components: {
    Nav,
    Contact,
    Footer
  }
};
</script>


<style lang='scss'>
body {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
.main {
  margin-top: 0.9rem;
}
@media screen and(max-width: 768px) {
  .main {
    margin-top: 1.8rem;
  }
}

</style>
