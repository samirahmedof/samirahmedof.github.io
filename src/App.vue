<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Loader from "./components/shared/Loader";
import Home from "./components/home/Home";

export default {
  name: "app",
  data() {
    return {
      loaderOff: false,
    };
  },
  components: {
    Header,
    Loader,
    Home,
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
