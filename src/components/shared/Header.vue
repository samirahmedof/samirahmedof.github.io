<template>
  <header class="header" id="navbar-collapse-toggle">
    <ul
      class="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1 no-transform revealator-within"
    >
      <li class="icon-box">
        <i class="fas fa-home"></i>
        <router-link to="/" active-class="activePage" exact>
          <h2>Home</h2>
        </router-link>
      </li>
      <li class="icon-box">
        <i class="fas fa-user"></i>
        <router-link to="/about" active-class="activePage">
          <h2>About</h2>
        </router-link>
      </li>
      <li class="icon-box">
        <i class="fas fa-briefcase"></i>
        <router-link to="/portfolio" active-class="activePage">
          <h2>Portfolio</h2>
        </router-link>
      </li>
      <li class="icon-box">
        <i class="fas fa-envelope-open"></i>
        <router-link to="/contact" active-class="activePage">
          <h2>Contact</h2>
        </router-link>
      </li>
    </ul>
    <nav role="navigation" class="d-block d-lg-none">
      <div id="menuToggle" :class="{'mobileMenuOpen':mobileMenuOpen}">
        <input type="checkbox" @click="mobileMenuOpen=!mobileMenuOpen" />
        <span></span>
        <span></span>
        <span></span>
        <ul class="list-unstyled" id="menu">
          <li @click="mobileMenuOpen=false">
            <router-link to="/" active-class="activeNav" exact>
              <i class="fas fa-home"></i>
              <span>Home</span>
            </router-link>
          </li>
          <li @click="mobileMenuOpen=false">
            <router-link to="/about" active-class="activeNav">
              <i class="fas fa-user"></i>
              <span>About</span>
            </router-link>
          </li>
          <li @click="mobileMenuOpen=false">
            <router-link to="/portfolio" active-class="activeNav">
              <i class="fas fa-briefcase"></i>
              <span>Portfolio</span>
            </router-link>
          </li>
          <li @click="mobileMenuOpen=false">
            <router-link to="/contact" active-class="activeNav">
              <i class="fas fa-envelope-open"></i>
              <span>Contact</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    mobileMenuChange() {
      console.log("sadf");
    },
  },
};
</script>
<style lang="scss" scoped>
.icon-box {
  a {
    border-radius: 100%;
  }
}
.activePage {
  background: #ffb400;
}
#menuToggle li a {
  transition-delay: 0s !important;
}
.activeNav {
  color: #ffb400 !important;
}
</style>