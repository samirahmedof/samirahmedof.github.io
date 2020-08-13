<template>
  <main class="home">
    <Loader v-if="!loaderOff" />
    <section
      class="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1"
      :class="{'no-transform revealator-within':loaderOff}"
    >
      <div class="color-block d-none d-lg-block"></div>
      <div class="row home-details-container align-items-center">
        <div class="col-lg-4 bg position-fixed d-none d-lg-block"></div>
        <div class="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
          <div>
            <img
              src="src/assets/img/222.jpg"
              class="img-fluid main-img-mobile d-none d-sm-block d-lg-none"
              alt="my picture"
            />
            <h6 class="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">hi there !</h6>
            <h1 class="text-uppercase poppins-font">
              <span>I'm</span> samir ahmadov
            </h1>
            <p
              class="open-sans-font"
            >I'm a Azerbaijan based  front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
            <router-link to="/about" class="btn btn-about">
              <i class="fas fa-user"></i>
              <span>more about me</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Loader from "./../shared/Loader";
export default {
  data() {
    return {
      loaderOff: false,
    };
  },
  components: {
    Loader
  },
  mounted() {
    setTimeout(() => {
      this.loaderOff = true;
    }, 300);
  },
};
</script>
<style lang="scss" scoped>
main {
  padding: 25px;
  overflow: hidden;
  height: 100%;
}
img {
  object-fit: cover;
}
</style>