<template>
  <div id="app">
    <div class="wrapper">
        <Header></Header>
        <router-view />
        <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Container from './pages/container.vue';
import Footer from './components/footer.vue';
import Reset from './css/reset.css';

export default {
  name: 'App',

  components: {
      Header,
      Container,
      Footer
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.wrapper {
    position: relative;
    width: 100%;
    min-height: 100%;
}

.footer_wrap_menu{
    padding: 3.4rem 0;
}

@media (max-width: 768px) {
    .footer_wrap_menu_intro {
        text-align: center;
    }

    .footer_wrap_menu {
        padding: 2rem 0;
    }
}
</style>
