<template>
  <main class="contact">
    <Loader v-if="!loaderOff" />

    <section
      class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1"
      :class="{'no-transform revealator-within':loaderOff}"
    >
      <h1>
        get in
        <span>touch</span>
      </h1>
      <span class="title-bg">contact</span>
    </section>
    <section
      class="main-content revealator-slideup revealator-once revealator-delay1"
      :class="{'no-transform revealator-partially-below':loaderOff}"
    >
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-lg-4 pt-4 pb-4">
            <h3 class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
            <p
              class="open-sans-font mb-0"
            >Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          </div>
          <div class="col-12 col-lg-4 borderLeft pt-4 pb-4">
            <p class="open-sans-font custom-span-contact position-relative">
              <i class="fas fa-envelope-open position-absolute"></i>
              <span class="d-block">mail me</span>ahmadovsmr@gmail.com
            </p>
            <p class="open-sans-font custom-span-contact position-relative">
              <i class="fas fa-phone-square position-absolute"></i>
              <span class="d-block">call me</span>+994 55 250 75 35
            </p>
            <ul class="social list-unstyled pt-1 mb-0">
              <li class="facebook">
                <a title="Facebook" href="https://www.facebook.com/ahmadovsmr" target="blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="linkedin">
                <a title="Linkedin" href="https://www.linkedin.com/in/ahmadovsmr" target="blank">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li class="github">
                <a title="Github" href="https://github.com/samirahmedof" target="blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
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
@media (min-width: 992px) {
  .borderLeft {
    border-left: 1px solid #dee2e6 !important;
  }
}
</style>
